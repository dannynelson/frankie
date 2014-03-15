angular.module('signup', [])

.config(function($stateProvider) {
  $stateProvider.state('signup', {
    url: "/signup",
    templateUrl: 'signup/signup.tpl.html',
    controller: 'SignupCtrl'
  });
})

.controller('SignupCtrl', function($scope) {});
