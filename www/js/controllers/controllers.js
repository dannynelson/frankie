angular.module('frankie.controllers')


// A simple controller that fetches a list of data from a service
.controller('ProjectsCtrl', function($scope, $ionicModal, ProjectService) {
  // "Pets" is a service returning mock data (services.js)

  $scope.leftButtons = [
    {
      type: 'button-clear',
      content: '<i class="icon ion-navicon"></i>',
      tap: function(e) {
        $scope.sideMenuController.toggleLeft();
      }
    }
  ];

  $scope.titleButtons =
    '<div class="button-bar">\
      <a class="button">Projects</a>\
      <a class="button">Calendar</a>\
    </div>';

  $scope.rightButtons = [
    {
      type: 'button-clear',
      content: '<i class="icon ion-ios7-plus-empty"></i>',
      tap: function(e) {
        $scope.newTask();
      }
    }
  ];

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
