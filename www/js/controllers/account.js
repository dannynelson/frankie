angular.module('frankie.controllers')

.controller('AccountCtrl', function($scope, user) {

  // Header
  // -------------------------------
  $scope.title = 'Account';
  $scope.leftButtons = [
    {
      type: 'button-icon button-clear button-assertive',
      content: '<i class="icon ion-navicon"></i>',
      tap: function(e) {
        $scope.sideMenuController.toggleLeft();
      }
    }
  ];
  $scope.rightButtons = [];

});


