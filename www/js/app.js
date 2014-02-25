// TODO: navigation helper for going to pages and goinb back

angular.module('frankie.controllers', []);
angular.module('frankie.services', []);
angular.module('frankie.directives', []);
angular.module('frankie.filters', []);
angular.module('frankie', ['ionic', 'ngTouch', 'frankie.services', 'frankie.controllers', 'frankie.directives', 'frankie.filters'])


// States
// ==================================

.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider

    // Signin/Signup
    // ------------------------------
    .state('signin', {
      url: "/signin",
      // abstract means we can never directly activate this template, it is just a wrapper for other templates
      templateUrl: 'templates/signin.html',
      controller: 'SigninCtrl'
    })

    .state('signup', {
      url: "/signup",
      // abstract means we can never directly activate this template, it is just a wrapper for other templates
      templateUrl: 'templates/signup.html',
      controller: 'SignupCtrl'
    })

    // Main Section
    // ------------------------------
    // setup an abstract state for the side menu directive
    .state('main', {
      url: "/main",
      // abstract means we can never directly activate this template, it is just a wrapper for other templates
      abstract: true,
      templateUrl: "templates/main.html"
    })

    // the pet tab has its own child nav-view and history
    // the dot notation indicates that it is a child
    .state('main.projects', {
      url: '/projects',
      templateUrl: 'templates/projects.html',
      controller: 'ProjectsCtrl'
    })

    .state('main.archives', {
      url: '/archives',
      templateUrl: 'templates/projects.html',
      controller: 'ArchivesCtrl'
    })
    
    .state('main.calendar', {
      url: '/calendar',
      templateUrl: 'templates/calendar.html',
      controller: 'CalendarCtrl'
    })

    // Creating and editing projects
    .state('main.project-detail', {
      url: '/projects/:id',
      templateUrl: 'templates/project-detail.html',
      controller: 'ProjectDetailCtrl'
    })

    .state('main.new-project', {
      // add type to specify edit mode
      url: '/new-project/:type',
      templateUrl: 'templates/new-project.html',
      controller: 'NewProjectCtrl'
    })

    .state('main.new-client', {
      url: '/new-client',
      templateUrl: 'templates/new-client.html',
      controller: 'NewClientCtrl'
    })

    .state('main.new-timeline', {
      url: '/new-timeline',
      templateUrl: 'templates/new-timeline.html',
      controller: 'NewTimelineCtrl'
    })

    .state('main.milestone', {
      url: '/new-milestone/:id',
      templateUrl: 'templates/new-milestone.html',
      controller: 'NewMilestoneCtrl'
    })

    .state('main.account', {
      url: '/account',
      templateUrl: 'templates/account.html',
      controller: 'AccountCtrl'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/signin');

})


// Initialize
// ==================================

.run(function($ionicPlatform) {

  // change status bar to light color
  $ionicPlatform.ready(function() {
    StatusBar.styleLightContent();
  });
  
});

