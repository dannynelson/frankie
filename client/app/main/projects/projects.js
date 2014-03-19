// TODO: lazy load the template directories

angular.module('main.projects', ['filters.moment', 'resources.Project', 'services.loading'])

.config(function($stateProvider) {
  $stateProvider.state('main.projects', {
    url: '/projects',
    templateUrl: 'main/projects/projects.tpl.html',
    controller: 'ProjectsCtrl',
    resolve: {
      projects: function($q, Project) {
        var defer = $q.defer();
        Project.get({
          where: '{"completed":false}'
        }, function(response) {
          defer.resolve(response.results);
        });
        return defer.promise;
      }
    }
  });
})

.controller('ProjectsCtrl', function($scope, $location, projects, loading) {
  $scope.projects = projects;
  // loading.show();
  // Project.get(function(response) {
  //   $scope.projects = response.results;
  //   loading.hide();
  // });

  $scope.$on('projectsUpdated', function(newProjects) {
    // debugger;
    // $scope.$apply();
    // $scope.$apply(function() {
      $scope.projects = newProjects;
    // });
  });

  $scope.title = 'Projects';
  $scope.rightButtons = [{
    type: 'button-icon button-clear button-assertive',
    content: '<i class="ion-compose extra-large"></i>',
    tap: function(e) {
      // must specify new at end of state to get correct form
      $location.url('/main/new-project/new');
    }
  }];
  $scope.courtesyMessage = 'You currently don\'t have any projects. Click the button in the top right to create a one.';
});


