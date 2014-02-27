angular.module('frankie.main.archives', ['frankie.main'])

// Shares the same template as projects
.config(function($stateProvider) {
  $stateProvider.state('main.archives', {
    url: '/archives',
    templateUrl: 'main/projects/projects.tpl.html',
    controller: 'ArchivesCtrl'
  });
})

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
