angular.module('frankie.controllers')

// A simple controller that shows a tapped item's data
.controller('SigninCtrl', function($scope, $stateParams) {
  $scope.rightButtons = [
    {
      type: 'button-clear',
      content: '<i class="icon ion-ios7-plus-empty"></i>',
      tap: function(e) {
        $scope.newTask();
      }
    }
  ];
});