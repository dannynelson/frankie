angular.module('frankie.controllers')

.controller('NewTimelineCtrl', function($scope, $stateParams, $location, $ionicModal, CurrentProjectService) {
  
  // Set Header
  // ----------------------------
  $scope.title = 'Timeline';
  $scope.leftButtons = [];
  $scope.rightButtons = [];

  // Methods
  // ----------------------------
  $scope.save = function (timeline) {
    CurrentProjectService.set('timeline', timeline);
  };

});

angular.module('frankie.controllers')

.controller('NewTimelineCtrl', function($scope, $stateParams, $location, CurrentProjectService) {
  
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