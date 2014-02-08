angular.module('frankie.controllers')

.controller('NewProjectCtrl', function($scope, $stateParams, $location, ProjectService, currentProject) {
  
  // Get Data
  // ----------------------------
  $scope.project = currentProject.all();

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
      content: 'Save',
      tap: function(e) {
        $scope.save($scope.project);
      }
    }
  ];

  // Methods
  // ----------------------------
  $scope.save = function (project) {
    ProjectService.add(project);
    currentProject.clear();
    $location.url('/main/projects');
  };
});