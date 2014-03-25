angular.module('main', [
  'main.account',
  'main.analytics',
  'main.projects',
  // common
  'services.auth'
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
})

.controller('MenuCtrl', function($scope, $state, auth) {
  // Add navigation helper within side-menu
  $scope.goTo = function(state) {
    $scope.sideMenuController.toggleLeft();
    $state.go(state);
  };
  $scope.signout = function() {
    auth.signout();
    $state.go('landing.signin');
  };
});
