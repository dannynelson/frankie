angular.module('landing.signin', ['models.User', 'main.projects'])

.config(function($stateProvider) {
  $stateProvider.state('landing.signin', {
    url: "/signin",
    templateUrl: 'landing/signin/signin.tpl.html',
    controller: 'SigninCtrl'
  });
})

.controller('SigninCtrl', function ($scope, $state, User) {
  $scope.title = '';
  $scope.user = {};
  $scope.signin = function(user) {
    debugger;
    User.logIn(user.username, user.password, {
      success: function() {
        $state.go('main.projects');
      },
      error: function(retrievedUser, error) {
        alert("Invalid Username or Password");
      }
    });
  };
});
