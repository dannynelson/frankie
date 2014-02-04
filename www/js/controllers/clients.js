angular.module('frankie.controllers')


// A simple controller that fetches a list of data from a service
.controller('ClientsCtrl', function($scope, $ionicModal, ClientService) {
  // "Pets" is a service returning mock data (services.js)

  $scope.clients = ClientService.all();

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
});
