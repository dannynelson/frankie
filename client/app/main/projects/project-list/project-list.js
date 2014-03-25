angular.module('main.projects.projectList', [
  'filters.moment',
  'services.projects',
  'services.loading'
])

.config(function($stateProvider) {
  $stateProvider.state('main.projects.projectList', {
    url: '/project-list',
    templateUrl: 'templates/project-list.tpl.html',
    controller: 'ProjectListCtrl',
    resolve: {
      projectData: function(projects) {
        return projects.all();
      }
    }
  });
})

.controller('ProjectListCtrl', function($scope, $state, projectData, loading) {
  
  $scope.projects = projectData;
  $scope.courtesyMessage = 'You currently don\'t have any projects. Click the button in the top right to create a one.';

  $scope.title = 'Projects';
  $scope.rightButtons = [{
    type: 'button-icon button-clear button-assertive',
    content: '<i class="ion-compose extra-large"></i>',
    tap: function(e) {
      // must specify new at end of state to get correct form
      $state.go('main.projects.newProject', {type: 'new'});
    }
  }];
});
