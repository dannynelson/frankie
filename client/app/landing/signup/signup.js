angular.module('landing.signup', [])

.config(function($stateProvider) {
  $stateProvider.state('landing.signup', {
    url: "/signup",
    templateUrl: 'landing/signup/signup.tpl.html',
    controller: 'SignupCtrl'
  });
})

.controller('SignupCtrl', function($scope) {
  $scope.title = 'Create an Account';
});
