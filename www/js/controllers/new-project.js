angular.module('frankie.controllers')

.controller('NewProjectCtrl', function($scope, $stateParams, $location, $ionicModal, ProjectService) {
  
  // Set Header
  // ----------------------------

  $scope.title = 'New Project';

  $scope.leftButtons = [
    {
      type: 'button-clear button-assertive',
      content: 'Cancel',
      tap: function(e) {
        $location.url('/main/projects');
      }
    }
  ];

  $scope.rightButtons = [
    {
      type: 'button-clear button-assertive',
      content: '<b>Save</b>',
      tap: function(e) {
        $scope.save($scope.project);
        $location.url('/main/new-project');
      }
    }
  ];

  // Listeners
  // ----------------------------

  $scope.$on('clientUpdated', function (event, data) {
    $scope.projects.clientInfo = data;
  });

  $scope.$on('timelineUpdated', function (event, data) {
    $scope.projects.timeline = data;
  });

  // Methods
  // ----------------------------

  $scope.save = function (projectJSON) {
    ProjectService.save(projectJSON);
    // emit event to update projects page
    $scope.$emit('projectCreated');
  };
});