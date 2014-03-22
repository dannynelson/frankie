angular.module('services.projects', [
  'resources.Project',
  'resources.File',
  'services.loading',
  'services.loading',
  'services.currentUser'
])

.factory('projects', function($q, $http, File, Project, loading, photo) {
  var fetchProjects = function(newQuery) {
    var query = {
      // user: {
      //   __type: 'Pointer',
      //   className: '_User',
      //   objectId: 'gwhGqiyLjR'
      // },
      completed: false
    };
    var defer = $q.defer();
    _.extend(query, newQuery);
    Project.get({
      where: JSON.stringify(query)
    }, function(response) {
      projects = response.results;
      loading.hide();
      fetched = true;
      defer.resolve(projects);
    });
    return defer.promise;
  };

  var fetchArchives = function() {
    var defer = $q.defer();
    var query = {
      completed: true
    };
    Project.get({
      where: JSON.stringify(query)
    }, function(response) {
      loading.hide();
      defer.resolve(response.results);
    });
    return defer.promise;
  };

  var savePhoto = function(proj) {
    var d = $q.defer();
    var isParseUrl = function(url) {
      return (/files\.parse\.com/).test(url);
    };
    if (proj.photo && !isParseUrl(proj.photo)) {
      photo.save(proj.photo, function(retrievedFile) {
        proj.photo = retrievedFile.url();
        d.resolve();
      });
    } else {
      d.resolve();
    }
    return d.promise;
  };

  return {
    all: function(onSuccess) {
      loading.show();
      return fetchProjects();
    },
    add: function(newProject, onSuccess) {
      // loading.show();
      savePhoto(newProject).then(function() {
        newProject.$save(function(retrievedProject) {
          fetchProjects().then(onSuccess);
        });
      });

      // if (newProject.photo) {
      //   photo.save(newProject.photo, function(retrievedFile) {
      //     newProject.photo = retrievedFile.url();
      //     saveProject();
      //   });
      // } else {
      //   saveProject();
      // }
    },
    find: function(objectId) {
      var defer = $q.defer();
      Project.get({objectId: objectId}, function(project) {
        defer.resolve(project);
      });
      return defer.promise;
    },
    update: function(existingProject, onSuccess) {
      loading.show();
      savePhoto(existingProject).then(function() {
        existingProject.$update({objectId: existingProject.objectId}, function(retrievedProject) {
          fetchProjects().then(onSuccess);
        });
      });
    },
    archive: function(project, onSuccess) {
      loading.show();
      project.completed = true;
      var project = new Project(project);
      project.$update({objectId: project.objectId}, function(retrievedProject) {
        fetchProjects().then(function() {
          loading.hide();
          onSuccess();
        });
      });
    },
    allArchives: function() {
      loading.show();
      return fetchArchives();
    }
  };
});
