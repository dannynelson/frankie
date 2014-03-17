angular.module('landing.signin', ['resources.user', 'main.projects'])

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
    User.signin(user.username, user.password, function() {
      $state.go('main.projects');
    });
  };
});
