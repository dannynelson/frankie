angular.module('services.projects', ['resources.Project', 'services.loading', 'services.currentUser'])

.factory('projects', function($q, Project, loading) {
  
  var projects = [];
  projects.fetched = false;

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
    var query = {
      completed: true
    };
    var defer = $q.defer();
    Project.get({
      where: JSON.stringify(query)
    }, function(response) {
      loading.hide();
      defer.resolve(response.results);
    });
    return defer.promise;
  };

  return {
    all: function() {
      loading.show();
      if (!projects.fetched) {
        return fetchProjects();
      } else {
        loading.hide();
        return projects;
      }
    },
    add: function(newProject, onSuccess) {
      loading.show();
      newProject.$save(function(retrievedProject) {
        fetchProjects().then(onSuccess);
      });
    },
    find: function(objectId) {
      for (var i = 0; i < projects.length; i++) {
        if (projects[i].objectId === objectId) {
          return projects[i];
        }
      }
    },
    update: function(existingProject, onSuccess) {
      loading.show();
      existingProject.$update({objectId: existingProject.objectId}, function(retrievedProject) {
        fetchProjects().then(onSuccess);
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
      debugger;
      loading.show();
      return fetchArchives();
    }
  };
});
