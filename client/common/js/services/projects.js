angular.module('services.projects', ['resources.Project', 'resources.File', 'services.loading', 'services.currentUser'])

.factory('projects', function($q, $http, File, Project, loading) {
  
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
    all: function(onSuccess) {
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
      var saveProject = function() {
        newProject.$save(function(retrievedProject) {
          fetchProjects().then(onSuccess);
        });
      };
      debugger;

      if (newProject.photo) {
        // var base64 = newProject.photo.split('base64,')[1];
        // debugger;
        // $http({
        //   method: 'POST',
        //   url: 'https://api.parse.com/1/files/photo.jpg',
        //   headers: {
        //     'Content-Type':'image/jpeg'
        //   },
        //   data: {
        //     base64: base64
        //   }
        // }).success(function(data) {
        //   newProject.photo = data.url;
        // });

        // var photo = new File();
        // photo.$upload({
        //   fileName: 'photo.jpg'
        // },{
        //   base64: base64
        // }, function(response) {
        //   debugger;
        //   alert('file saved');
        //   newProject.photo = response.url;
        //   alert(response.url);
        //   saveProject();
        // });
        // debugger;

        var base64 = newProject.photo.split('base64,')[1];
        var parseFile = new Parse.File('photo.jpg', { base64: base64 });
        parseFile.save().then(function(retrievedFile) {
          newProject.photo = retrievedFile.url();
          saveProject();
        }, function(error) {
          console.log(error);
        });
      } else {
        saveProject();
      }
    },
    find: function(objectId) {
      // for (var i = 0; i < projects.length; i++) {
      //   if (projects[i].objectId === objectId) {
      //     return projects[i];
      //   }
      // }
      var defer = $q.defer();
      Project.get({objectId: objectId}, function(project) {
        defer.resolve(project);
      });
      return defer.promise;
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
      loading.show();
      return fetchArchives();
    }
  };
});
