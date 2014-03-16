angular.module('landing.signin', ['resources.user'])

.config(function($stateProvider) {
  $stateProvider.state('landing.signin', {
    url: "/signin",
    templateUrl: 'landing/signin/signin.tpl.html',
    controller: 'SigninCtrl'
    // resolve: {
    //   user: function(User, $location) {
    //     debugger;
    //     var user = User.getCurrent();
    //     if (user) {
    //       $location.url('/main/projects');
    //     }
    //     return user;
    //   }
    // }
  });
})

.controller('SigninCtrl', function ($scope) {
  // debugger;
  // var user = User.getCurrent();
  // if (user) {
  //   $state.go('main.projects');
  // }
  $scope.title = '';

  // $scope.user = user;
});
