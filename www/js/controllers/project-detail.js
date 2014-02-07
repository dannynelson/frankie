angular.module('frankie.controllers')

.controller('ProjectDetailCtrl', function($scope, $stateParams, $ionicModal, ProjectService) {
  
  // Retrieve Data
  // -------------------------------
  $scope.project = ProjectService.get($stateParams.id);


  // Set Navigation
  // -------------------------------
  $scope.title = $scope.project.title;

  $scope.leftButtons = [];

  $scope.rightButtons = [
    {
      type: 'button-clear button-assertive',
      content: '<button>edit</button>',
      tap: function(e) {
        $scope.newTask();
      }
    }
  ];

    // Create our modal
  // $ionicModal.fromTemplateUrl('templates/new-project.html', function(modal) {
  //   $scope.projectModal = modal;
  // }, {
  //   scope: $scope
  // });

  // $scope.newTask = function() {
  //   $scope.projectModal.show();
  // };

  // $scope.closeNewTask = function() {
  //   $scope.projectModal.hide();
  // };
});