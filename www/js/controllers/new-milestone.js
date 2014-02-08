angular.module('frankie.controllers')

.controller('NewMilestoneCtrl', function($scope, $location, $stateParams, currentProject, currentDate) {
  
  // Get Data
  // ----------------------------
  $scope.milestone = currentProject.get('timeline')[$stateParams.id];

  // Set Header
  // ----------------------------
  $scope.title = $scope.milestone.title;
  $scope.leftButtons = [];
  $scope.rightButtons = [];

});