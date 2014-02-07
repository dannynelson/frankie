angular.module('frankie.controllers')

// A simple controller that shows a tapped item's data
.controller('NewProjectCtrl', function($scope, $stateParams, $ionicModal, ProjectService) {

  $scope.title = 'New Project';

  $scope.leftButtons = [];

  $scope.rightButtons = [
    {
      type: 'button-clear button-assertive',
      content: '<i class="ion-plus large"></i>',
      tap: function(e) {
        $location.url('/main/new-project');
      }
    }
  ];
});