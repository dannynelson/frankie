angular.module('frankie.controllers')

.controller('ProjectDetailCtrl', function($scope, $stateParams, $location, currentProject, ProjectService) {
  
  // Retrieve Data
  // -------------------------------
  $scope.project = ProjectService.get($stateParams.id);
  currentProject.create($scope.project);

  // Set Navigation
  // -------------------------------
  $scope.title = $scope.project.title;
  $scope.leftButtons = [];
  $scope.rightButtons = [
    {
      type: 'button-clear button-assertive',
      content: '<button>edit</button>',
      tap: function(e) {
        $location.url('/main/new-project');
      }
    }
  ];

  // Listeners
  // -------------------------------
  $scope.$on('back', function(event) {
    currentProject.clear();
  });

});