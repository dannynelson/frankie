angular.module('frankie.controllers')

.controller('ProjectDetailCtrl', function($scope, $stateParams, $location, currentProject, ProjectService, moment) {
  
  // Retrieve Data
  // -------------------------------
  $scope.project = ProjectService.get($stateParams.id);
  // set currentProject, so that related views can reference the same object
  currentProject.create($scope.project);

  // Navigation
  // -------------------------------
  $scope.title = $scope.project.title;
  $scope.leftButtons = [];
  $scope.rightButtons = [
    {
      type: 'button-clear button-assertive',
      content: '<button>edit</button>',
      tap: function(e) {
        $location.url('/main/new-project/edit');
      }
    }
  ];

  // Listeners
  // -------------------------------
  // clear currentProject when back button pressed
  $scope.$on('back', function(event) {
    currentProject.clear();
  });

  // Methods
  // -------------------------------
  // go to url to open contact application
  $scope.contact = function (method, address) {
    window.location.href = method + ':' + address;
  };

  // abbreviate dates in project overview
  $scope.format = moment.format;

  // convert to date from now in timeline
  $scope.fromNow = moment.fromNow;

});