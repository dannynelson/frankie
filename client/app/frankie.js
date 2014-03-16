angular.module('frankie', [
  // app-wide dependencies
  'ionic',
  'templates.app',
  'templates.common',
  // app modules
  'main',
  'landing',
])

.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/landing/signin');
})

.run(function($ionicPlatform) {
  // change status bar to light color
  // $ionicPlatform.ready(function() {
  //   StatusBar.styleLightContent();
  // });
});
