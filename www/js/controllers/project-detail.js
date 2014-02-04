angular.module('frankie.controllers')

// A simple controller that shows a tapped item's data
.controller('ProjectDetailCtrl', function($scope, $stateParams, ProjectService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.project = ProjectService.get($stateParams.id);
});