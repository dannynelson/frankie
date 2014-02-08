angular.module('frankie.controllers')

.controller('NewProjectCtrl', function($scope, $stateParams, $location, ProjectService, CurrentProjectService) {
  
  $scope.project = CurrentProjectService.all();

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

  // Methods
  // ----------------------------

  $scope.save = function (projectJSON) {
    ProjectService.save(projectJSON);
    // emit event to update projects page
    $scope.$emit('projectCreated');
  };
});