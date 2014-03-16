angular.module('main', [
  'main.account',
  'main.analytics',
  'main.archives',
  'main.calendar',
  'main.help',
  'main.newAddress',
  'main.newClient',
  'main.newMilestone',
  'main.newProject',
  'main.newTimeline',
  'main.projectDetail',
  'main.projects',
])

.config(function($stateProvider) {
  $stateProvider.state('main', {
    url: "/main",
    abstract: true,
    templateUrl: "main/main.tpl.html",
    controller: 'MainCtrl'
  });
})

// Add default buttons in all main items
.controller('MainCtrl', function($scope) {
  // default buttons on every item within main ctrl
  $scope.leftButtons = [{
    type: 'button-icon button-clear button-assertive',
    content: '<i class="icon ion-navicon"></i>',
    tap: function(e) {
      $scope.sideMenuController.toggleLeft();
    }
  }];
  $scope.rightButtons = [];
})

.controller('MenuCtrl', function($scope, $location) {
  // Add navigation helper within side-menu
  $scope.goTo = function(path) {
    $scope.sideMenuController.toggleLeft();
    $location.url('/' + path);
  };
});
