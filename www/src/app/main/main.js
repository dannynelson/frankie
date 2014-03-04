angular.module('frankie.main', [])

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

// Add navigation helper within side-menu
.controller('MenuCtrl', function($scope, $location) {
  $scope.goTo = function(path) {
    $scope.sideMenuController.toggleLeft();
    $location.url('/' + path);
  };
});