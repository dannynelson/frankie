angular.module('landing.signup', ['resources.User', 'services.auth'])

.config(function($stateProvider) {
  $stateProvider.state('landing.signup', {
    url: "/signup",
    templateUrl: 'landing/signup/signup.tpl.html',
    controller: 'SignupCtrl'
  });
})

.controller('SignupCtrl', function($scope, $state, User, auth) {
  $scope.user = new User();
  $scope.signup = function(user) {
    auth.signup(user, function() {
      $state.go('main.projects');
    });
  };
});
