angular.module('frankie.signin', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('signin', {
    url: "/signin",
    templateUrl: 'signin/signin.tpl.html',
    controller: 'SigninCtrl'
  });
})

.controller('SigninCtrl', function ($scope) {});
