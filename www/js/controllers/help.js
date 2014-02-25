angular.module('frankie.controllers')

.controller('HelpCtrl', function($scope) {

  // Header
  // -------------------------------
  $scope.title = 'Help';
  $scope.leftButtons = [{
    type: 'button-icon button-clear button-assertive',
    content: '<i class="icon ion-navicon"></i>',
    tap: function(e) {
      $scope.sideMenuController.toggleLeft();
    }
  }];
  $scope.rightButtons = [];

});


