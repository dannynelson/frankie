// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('frankie.controllers', []);
angular.module('frankie.services', []);
angular.module('frankie', ['ionic', 'ngTouch', 'frankie.services', 'frankie.controllers'])


// Configuration Code
// ==================================

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
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
      templateUrl: 'templates/account.html'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/signin');

})


// Initialization Code
// ==================================

.run(function($ionicPlatform) {

  // change status bar to light color
  $ionicPlatform.ready(function() {
    StatusBar.styleLightContent();
  });
  
});

