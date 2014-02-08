angular.module('frankie.controllers')

.controller('NewMilestoneCtrl', function($scope, $rootScope, $stateParams, currentProject) {
  
  // Get Data
  // ----------------------------
  $scope.milestone = currentProject.get('timeline')[$stateParams.id];

  // Set Header
  // ----------------------------
  $scope.title = $scope.milestone.title;
  $scope.leftButtons = [];
  $scope.rightButtons = [];

  // Methods
  // ----------------------------
  $scope.completeMilestone = function (milestone) {
    $rootScope.$viewHistory.backView.go();
  };
});