angular.module('frankie.controllers')

// A simple controller that fetches a list of data from a service
.controller('AppCtrl', function($scope, $location, $ionicPlatform) {

  // How do they share the sideMenuController here?
  // http://plnkr.co/edit/p9b6SWZmBKWYm0FIKsXY?p=preview
  $scope.goTo = function(page, sideMenuController) {
    console.log('Going to ' + page);
    sideMenuController.toggleLeft();
    $location.url('/' + page);
  };

  // change status bar to light color
  $ionicPlatform.ready(function() {
    StatusBar.styleLightContent();
  });



});