// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('frankie.controllers', []);
angular.module('frankie.services', []);


angular.module('frankie', ['ionic', 'frankie.services', 'frankie.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      // abstract means we can never directly activate this template, it is just a wrapper for other templates
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // the pet tab has its own child nav-view and history
    // the dot notation indicates that it is a child
    .state('tab.projects', {
      url: '/projects',
      views: {
        'projects-tab': {
          templateUrl: 'templates/projects.html',
          controller: 'ProjectsCtrl'
        }
      }
    })

    .state('tab.project-detail', {
      url: '/project/:id',
      views: {
        'projects-tab': {
          templateUrl: 'templates/project-detail.html',
          controller: 'ProjectDetailCtrl'
        }
      }
    })

    .state('tab.clients', {
      url: '/clients',
      views: {
        'clients-tab': {
          templateUrl: 'templates/clients.html',
          controller: 'ClientsCtrl'
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'account-tab': {
          templateUrl: 'templates/account.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/projects');

});

