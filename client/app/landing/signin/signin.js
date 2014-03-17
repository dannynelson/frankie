angular.module('landing.signin', ['resources.user'])

.config(function($stateProvider) {
  $stateProvider.state('landing.signin', {
    url: "/signin",
    templateUrl: 'landing/signin/signin.tpl.html',
    controller: 'SigninCtrl',
    resolve: {
      user: function(User) {
        // debugger;
        return User.getCurrent();
        // if (user) {
        //   $location.url('/main/projects');
        // }
        // return user;
      }
    }
  });
})

.controller('SigninCtrl', function ($scope, $state, user, User) {
  $scope.title = '';
  $scope.user = user;
  $scope.signin = function(user) {
    User.signin(user.username, user.password, function() {
      $state.go('main.projects');
    });
  };
});
