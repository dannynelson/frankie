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
  var fetchProjectsAndHideLoading = function(onSuccess) {
    var defer = $q.defer();

    Project.get({
      where: JSON.stringify(query)
    }, function(response) {
      loading.hide();
      projects = response.results;
      fetched = true;
      defer.resolve(projects);
    });

    return defer.promise;
  };

  return {
    all: function() {
      loading.show();
      if (!fetched) {
        return fetchProjectsAndHideLoading();
      } else {
        return projects;
      }
    },
    add: function(newProject, onSuccess) {
      // var project = new Project(newProject);
      loading.show();
      newProject.$save(function(retrievedProject) {
        loading.hide();
        projects.push(retrievedProject);
        onSuccess();
      });
    },
    update: function(existingProject, onSuccess) {
      loading.show();
      existingProject.$update({objectId: existingProject.objectId}, function(retrievedProject) {
        fetchProjectsAndHideLoading().then(onSuccess);
      });
    }
  };
});
