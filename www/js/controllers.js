angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function($scope, $ionicModal, PetService) {
  // "Pets" is a service returning mock data (services.js)

  $scope.leftButtons = [
    { 
      type: 'button-clear',
      content: '<i class="icon ion-navicon"></i>',
      tap: function(e) {
        debugger;
        $scope.sideMenuController.toggleLeft();
      }
    }
  ];



  $scope.rightButtons = [
    { 
      type: 'button-clear',
      content: '<i class="icon ion-plus"></i>',
      tap: function(e) {
        $scope.newTask();
      }
    }
  ];

  $scope.pets = PetService.all();

  // Create our modal
  $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope
  });

  $scope.newTask = function() {
    $scope.taskModal.show();
  };

  $scope.closeNewTask = function() {
    $scope.taskModal.hide();
  };
})


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
});
