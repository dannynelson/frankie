angular.module('frankie.controllers')

.controller('AccountCtrl', function($scope) {

  // Header
  // -------------------------------
  $scope.title = 'Account';
  // $scope.titleButtons =
  //   '<div class="button-bar">\
  //     <a class="button">Projects</a>\
  //     <a class="button">Calendar</a>\
  //   </div>';
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


