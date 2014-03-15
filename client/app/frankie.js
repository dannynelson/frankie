angular.module('frankie', [
  // app-wide dependencies
  'ionic',
  'templates.app',
  'templates.common',
  // app modules
  'main',
  'signin',
  'signup'
])

.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/signin');
})

.run(function($ionicPlatform) {
  // change status bar to light color
  // $ionicPlatform.ready(function() {
  //   StatusBar.styleLightContent();
  // });
});
