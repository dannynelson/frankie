angular.module('landing', [
  'landing.signin',
  'landing.signup',
  'landing.forgotPassword'
])

.config(function($stateProvider) {
  $stateProvider.state('landing', {
    url: "/landing",
    abstract: true,
    templateUrl: 'templates/animation-view.tpl.html',
    controller: 'LandingCtrl'
  });
})

.controller('LandingCtrl', function($scope) {});
