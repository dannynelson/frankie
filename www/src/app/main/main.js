angular.module('frankie.main', ['frankie.main.projects'])

.config(function($stateProvider) {
  $stateProvider.state('main', {
    url: "/main",
    abstract: true,
    templateUrl: "main/main.tpl.html"
  });
});