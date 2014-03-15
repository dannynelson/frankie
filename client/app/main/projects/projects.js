// TODO: lazy load the template directories

angular.module('main.projects', ['filters.moment', 'resources.projects'])

.config(function($stateProvider) {
  $stateProvider.state('main.projects', {
    url: '/projects',
    templateUrl: 'main/projects/projects.tpl.html',
    controller: 'ProjectsCtrl',
    resolve: {
      projects: function (Projects) {
        return Projects.all();
      }
    }
  });
})

.controller('ProjectsCtrl', function($scope, $location, projects) {
  $scope.projects = projects;

  $scope.title = 'Projects';
  $scope.rightButtons = [{
    type: 'button-icon button-clear button-assertive',
    content: '<i class="ion-compose extra-large"></i>',
    tap: function(e) {
      // must specify new at end of state to get correct form
      $location.url('/main/new-project/new');
    }
  }];
});

