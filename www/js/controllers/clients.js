angular.module('frankie.controllers')


// A simple controller that fetches a list of data from a service
.controller('ClientsCtrl', function($scope, $ionicModal, ProjectService) {
  // "Pets" is a service returning mock data (services.js)

  $scope.projects = ProjectService.all();

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
.controller('ProjectDetailCtrl', function($scope, $stateParams, ProjectService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.project = ProjectService.get($stateParams.id);
});
