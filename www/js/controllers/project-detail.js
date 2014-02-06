angular.module('frankie.controllers')

// A simple controller that shows a tapped item's data
.controller('ProjectDetailCtrl', function($scope, $stateParams, $ionicModal, ProjectService) {
  $scope.project = ProjectService.get($stateParams.id);
  $scope.rightButtons = [
    {
      type: 'button-clear',
      content: '<button>edit</button>',
      tap: function(e) {
        $scope.newTask();
      }
    }
  ];

    // Create our modal
  $ionicModal.fromTemplateUrl('templates/new-project.html', function(modal) {
    $scope.projectModal = modal;
  }, {
    scope: $scope
  });

  $scope.newTask = function() {
    $scope.projectModal.show();
  };

  $scope.closeNewTask = function() {
    $scope.projectModal.hide();
  };
});