angular.module('landing.signup', ['models.User'])

.config(function($stateProvider) {
  $stateProvider.state('landing.signup', {
    url: "/signup",
    templateUrl: 'landing/signup/signup.tpl.html',
    controller: 'SignupCtrl'
  });
})

.controller('SignupCtrl', function($scope, $state, User) {
  $scope.user = {};
  $scope.title = 'Create an Account';
  $scope.signup = function(user) {
    User.signup(user, function() {
      $state.go('main.projects');
    });
  };
});
