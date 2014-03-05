angular.module('frankie.signup', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('signup', {
    url: "/signup",
    templateUrl: 'signup/signup.tpl.html',
    controller: 'SignupCtrl'
  });
})


.controller('SignupCtrl', function($scope) {});