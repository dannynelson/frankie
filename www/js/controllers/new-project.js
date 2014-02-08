angular.module('frankie.controllers')

.controller('NewProjectCtrl', function($scope, $rootScope, $stateParams, $location, ProjectService, currentProject) {
  
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
        $rootScope.$viewHistory.backView.go();
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
    $rootScope.$viewHistory.backView.go();
  };
});