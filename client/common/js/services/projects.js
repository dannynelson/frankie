angular.module('services.projects', ['resources.Project', 'services.loading'])

.factory('projects', function($rootScope, Project, loading) {
  var projects = [];

  loading.show();
  Project.get(function(response) {
    projects = response.results;
    $rootScope.$broadcast('projectsUpdated', projects);
    loading.hide();
  });

  return projects;

  // return {
  //   all: function() {
  //     if (!fetched) {
  //       var d = $q.defer();
  //       projects.fetch({
  //         success: function(collection) {
  //           fetched = true;
  //           d.resolve(collection);
  //         }
  //       });
  //       return d.promise;
  //     } else {
  //       return projects;
  //     }
  //   }
  // };


  // var d = $q.defer();
  // projects.fetch({
  //   success: function(collection) {
  //     d.resolve(collection.models);
  //   }
  // });
  // return d.promise;
});
