angular.module('frankie.controllers')

// A simple controller that fetches a list of data from a service
.controller('AppCtrl', function($scope, $ionicPlatform) {

  // change status bar to light color
  $ionicPlatform.ready(function() {
    StatusBar.styleLightContent();
  });
});