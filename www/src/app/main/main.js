angular.module('frankie.main', [])

.config(function($stateProvider) {
  $stateProvider.state('main', {
    url: "/main",
    abstract: true,
    templateUrl: "main/main.tpl.html"
  });
});