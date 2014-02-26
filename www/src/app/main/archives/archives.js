angular.module('frankie.controllers')

.controller('ArchivesCtrl', function($scope, $location, archives) {

  // Get Data
  // -------------------------------
  $scope.projects = archives.all();

  // Header
  // -------------------------------
  $scope.title = 'Archives';
  $scope.leftButtons = [{
    type: 'button-icon button-clear button-assertive',
    content: '<i class="icon ion-navicon"></i>',
    tap: function(e) {
      $scope.sideMenuController.toggleLeft();
    }
  }];
  $scope.rightButtons = [];

});
