// TODO: navigation helper for going to pages and goinb back

// angular.module('frankie.controllers', []);
// angular.module('frankie.services', []);
// angular.module('frankie.directives', []);
// angular.module('frankie.filters', []);
angular.module('frankie', [
  'ionic',
  // 'ngTouch',
  'frankie.signin'
  // 'frankie.main',
  // 'frankie.controllers',
  // 'frankie.directives',
  // 'frankie.filters'
])


// States
// ==================================

.config(function($stateProvider, $urlRouterProvider) {
  
  // $stateProvider

    // Signin Signup Views
    // ------------------------------
    // .state('signin', {
    //   url: "/signin",
    //   // abstract means we can never directly activate this template, it is just a wrapper for other templates
    //   templateUrl: 'templates/signin.html',
    //   controller: 'SigninCtrl'
    // })

    // .state('signup', {
    //   url: "/signup",
    //   // abstract means we can never directly activate this template, it is just a wrapper for other templates
    //   templateUrl: 'templates/signup.html',
    //   controller: 'SignupCtrl'
    // })

    // Side Tabs Views
    // ------------------------------
    // setup an abstract state for the side menu
    // .state('main', {
    //   url: "/main",
    //   abstract: true,
    //   templateUrl: "templates/main.html"
    // })

    // .state('main.projects', {
    //   url: '/projects',
    //   templateUrl: 'templates/projects.html',
    //   controller: 'ProjectsCtrl'
    // })

    // .state('main.calendar', {
    //   url: '/calendar',
    //   templateUrl: 'templates/calendar.html',
    //   controller: 'CalendarCtrl'
    // })

    // .state('main.archives', {
    //   url: '/archives',
    //   templateUrl: 'templates/projects.html',
    //   controller: 'ArchivesCtrl'
    // })

    // .state('main.help', {
    //   url: '/help',
    //   templateUrl: 'templates/help.html',
    //   controller: 'HelpCtrl'
    // })

    // .state('main.account', {
    //   url: '/account',
    //   templateUrl: 'templates/account.html',
    //   controller: 'AccountCtrl'
    // })

    // // Sub Views
    // // ------------------------------
    // .state('main.project-detail', {
    //   url: '/projects/:id',
    //   templateUrl: 'templates/project-detail.html',
    //   controller: 'ProjectDetailCtrl'
    // })

    // .state('main.new-project', {
    //   // add type to specify edit/new
    //   url: '/new-project/:type',
    //   templateUrl: 'templates/new-project.html',
    //   controller: 'NewProjectCtrl'
    // })

    // .state('main.new-timeline', {
    //   url: '/new-timeline',
    //   templateUrl: 'templates/new-timeline.html',
    //   controller: 'NewTimelineCtrl'
    // })

    // .state('main.milestone', {
    //   url: '/new-milestone/:id',
    //   templateUrl: 'templates/new-milestone.html',
    //   controller: 'NewMilestoneCtrl'
    // });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/signin');

})


// Initialization
// ==================================

.run(function($ionicPlatform) {

  // change status bar to light color
  $ionicPlatform.ready(function() {
    StatusBar.styleLightContent();
  });
  
});

