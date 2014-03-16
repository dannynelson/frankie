angular.module('landing', [
  'landing.signin',
  'landing.signup',
  'landing.forgotPassword'
])

.config(function($stateProvider) {
  $stateProvider.state('landing', {
    url: "/landing",
    abstract: true,
    templateUrl: "landing/landing.tpl.html",
    controller: 'LandingCtrl'
  });
})

.controller('LandingCtrl', function($scope) {
  $scope.leftButtons = [];
  $scope.rightButtons = [];
});
