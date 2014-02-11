angular.module('frankie.controllers')

.controller('NewClientCtrl', function($scope, $location, currentProject, currentDate) {
  
  // Get Data
  // ----------------------------
  $scope.client = currentProject.get('client');

  // Header
  // ----------------------------
  $scope.title = 'Client Info';
  $scope.leftButtons = [];
  $scope.rightButtons = [];

});