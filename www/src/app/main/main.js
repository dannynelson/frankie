angular.module('frankie.main', [])

.config(function($stateProvider) {
  debugger;
  $stateProvider.state('main', {
    url: "/main",
    abstract: true,
    templateUrl: "main/main.tpl.html"
  });
})

.controller('MenuCtrl', function($scope, $location) {
  $scope.goTo = function(path) {
    $scope.sideMenuController.toggleLeft();
    // $state.go(path);
    $location.url('/' + path);
  };
});