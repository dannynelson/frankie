angular.module('frankie.controllers')


// A simple controller that fetches a list of data from a service
.controller('ClientsCtrl', function($scope, $ionicModal, ClientService) {

  $scope.rightButtons = [
    {
      type: 'button-clear',
      content: '<i class="ion-plus large"></i>',
      tap: function(e) {
        $scope.newTask();
      }
    }
  ];

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
