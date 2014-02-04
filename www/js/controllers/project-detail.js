angular.module('frankie.controllers')

// A simple controller that shows a tapped item's data
.controller('ProjectDetailCtrl', function($scope, $stateParams, ProjectService) {
  $scope.project = ProjectService.get($stateParams.id);
});