angular.module('frankie.controllers')

.controller('NewClientCtrl', function($scope, $location, currentProject) {
  
  // Set Variables
  // ----------------------------
  $scope.client = currentProject.get('client');

  // Set Header
  // ----------------------------
  $scope.title = 'New Client';
  $scope.leftButtons = [];
  $scope.rightButtons = [];

});