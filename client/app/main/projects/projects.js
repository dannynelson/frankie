// TODO: lazy load the template directories

angular.module('main.projects', ['filters.moment', 'services.projects'])

.config(function($stateProvider) {
  $stateProvider.state('main.projects', {
    url: '/projects',
    templateUrl: 'main/projects/projects.tpl.html',
    controller: 'ProjectsCtrl',
    resolve: {
      projectData: function (projects) {
        return projects.all();
      }
    }
  });
})

.controller('ProjectsCtrl', function($scope, $location, projectData) {
  $scope.projects = projectData.models;

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


