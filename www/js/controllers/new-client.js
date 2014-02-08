angular.module('frankie.controllers')

.controller('NewClientCtrl', function($scope, $stateParams, $location, CurrentProjectService) {
  
  // Set Variables
  // ----------------------------
  $scope.client = CurrentProjectService.get('client') || {};

  // Set Header
  // ----------------------------
  $scope.title = 'New Client';
  $scope.leftButtons = [];
  $scope.rightButtons = [];

  // Listeners
  // ----------------------------
  // Listen for when back button is pressed
  // Event broadcast added to viewBack directive
  $scope.$on('back', function(event) {
    CurrentProjectService.set('client', $scope.client);
  });

  // Methods
  // ----------------------------
  $scope.save = function (client) {
    CurrentProjectService.set('client', client);
    $location.url('/main/new-project');
  };

});