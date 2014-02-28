// TODO: navigation helper for going to pages and goinb back
// TODO: new project related files in separate template
// TODO: shared controller between projects/archives/calendar?
// TODO: shared template between projects and archives
// TODO: auto load template url with tpl.js
// TODO: autoload title and buttons into each controller with state

angular.module('frankie', [
  // app-wide dependencies
  // - ionic includes ui-router and ng-animate
  // -------------------------------------------------------
  'ionic',
  // 'ngClick',
  'templates-app',
  'templates-common',

  // app modules
  // - the leaves of the frankie dependency tree
  // -------------------------------------------------------
  'frankie.signin',
  'frankie.signup',
  'frankie.main.projects',
  'frankie.main.calendar',
  'frankie.main.archives',
  'frankie.main.help',
  'frankie.main.account',
  'frankie.main.projectDetail',
  'frankie.main.newMilestone',
  'frankie.main.newClient',
  'frankie.main.newProject',
  'frankie.main.newTimeline'
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

