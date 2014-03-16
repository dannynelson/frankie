angular.module('frankie', [
  // app-wide dependencies
  'ionic',
  'templates.app',
  'templates.common',
  // app modules
  'main',
  'landing',
  // common
  'resources.user'
])

.config(function($urlRouterProvider, $stateProvider) {
  // If user is already logged in, go directly to main.projects
  // $urlRouterProvider.when('/landing/signin', function (User) {
  //   debugger;
  //   var user = User.getCurrent();
  //   if (!user.username) {
  //     $state.go('main.projects');
  //   }
  // });

  $urlRouterProvider.otherwise('/landing/signin');
})

.run(function($ionicPlatform, User, $state) {
  // change status bar to light color
  // $ionicPlatform.ready(function() {
  //   StatusBar.styleLightContent();
  // });
  Parse.initialize("P2Z0R55WriW7Mi8h6bQqmhlLgGZQxjPe3Vc7PVQx", "jvPhmi8qIckRbuv6C1ezzXCMMivYTfJrjjHK5Tcc");

  // When app first starts, if user is logged in, redirect them. 
  // var user = User.getCurrent();
  // if (user.username) {
  //   $state.go('main.projects');
  // }
});
