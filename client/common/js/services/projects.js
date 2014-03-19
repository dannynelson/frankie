angular.module('services.projects', ['resources.Project', 'services.loading', 'services.currentUser'])

.factory('projects', function($q, Project, loading) {
  
  var projects = [];

  var query = {
    // user: {
    //   __type: 'Pointer',
    //   className: '_User',
    //   objectId: 'gwhGqiyLjR'
    // },
    completed: false
  };

  var fetched = false;
  var fetchProjects = function() {
    loading.show();
    var defer = $q.defer();

    Project.get({
      where: JSON.stringify(query)
    }, function(response) {
      projects = response.results;
      fetched = true;
      defer.resolve(response.results);
      loading.hide();
    });

    return defer.promise;
  };

  return {
    all: function() {
      if (!fetched) {
        return fetchProjects();
      } else {
        return projects;
      }
    },
    add: function(newProject, onSuccess) {
      // var project = new Project(newProject);
      newProject.$save(function(retrievedProject) {
        projects.push(retrievedProject);
        onSuccess();
      });
    },
    update: function(existingProject, onSuccess) {
      existingProject.$update({objectId: existingProject.objectId}, function(retrievedProject) {
        fetchProjects().then(function(retrievedProjects) {
          projects = retrievedProjects;
          onSuccess();
        });
      });
    }
  };
});
