angular.module('landing.signin', ['resources.User', 'services.auth'])

.config(function($stateProvider) {
  $stateProvider.state('landing.signin', {
    url: "/signin",
    templateUrl: 'landing/signin/signin.tpl.html',
    controller: 'SigninCtrl'
  });
})

.controller('SigninCtrl', function ($scope, $state, auth) {
  $scope.user = {};
  $scope.signin = function(user) {
    debugger;
    auth.signin(user, function() {
      $state.go('main.projects');
    });
  };
});
