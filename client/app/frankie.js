angular.module('frankie', [
  // app-wide dependencies
  'ionic',
  'restangular',
  'ngResource',
  'templates.app',
  'templates.common',
  // app modules
  'main',
  'landing',
  // common
  'models.User'
])

.config(function($urlRouterProvider, $httpProvider, RestangularProvider) {
  $httpProvider.defaults.headers.common['X-Parse-Application-Id'] = 'P2Z0R55WriW7Mi8h6bQqmhlLgGZQxjPe3Vc7PVQx';
  $httpProvider.defaults.headers.common['X-Parse-REST-API-Key'] = 'XeVNDBn5qNQRmMD1G6A4PcWpk9sigMtYXVFXFjLB';
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
  // RestangularProvider.setBaseUrl('https://api.parse.com/1/classes');
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
