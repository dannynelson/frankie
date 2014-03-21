angular.module('frankie', [
  // app-wide dependencies
  'ionic',
  'ngResource',
  'templates.app',
  'templates.common',
  // app modules
  'main',
  'landing',
  // common
  'services.auth',
  'resources.User'
])

.config(function($urlRouterProvider, $httpProvider) {
  $httpProvider.defaults.headers.common['X-Parse-Application-Id'] = 'P2Z0R55WriW7Mi8h6bQqmhlLgGZQxjPe3Vc7PVQx';
  $httpProvider.defaults.headers.common['X-Parse-REST-API-Key'] = 'XeVNDBn5qNQRmMD1G6A4PcWpk9sigMtYXVFXFjLB';
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';

  $urlRouterProvider.otherwise('/landing/signin');
})

.run(function($ionicPlatform, auth) {
  // change status bar to light color
  // $ionicPlatform.ready(function() {
  //   StatusBar.styleLightContent();
  // });
  // Parse javascript API only being used for the file upload feature
  Parse.initialize("P2Z0R55WriW7Mi8h6bQqmhlLgGZQxjPe3Vc7PVQx", "jvPhmi8qIckRbuv6C1ezzXCMMivYTfJrjjHK5Tcc");
  auth.checkForSession();
});
