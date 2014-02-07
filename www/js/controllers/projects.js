angular.module('frankie.controllers')


// A simple controller that fetches a list of data from a service
.controller('ProjectsCtrl', function($scope, $ionicModal, ProjectService) {
  // "Pets" is a service returning mock data (services.js)

  $scope.leftButtons = [
    {
      type: 'button-clear button-assertive',
      content: '<i class="icon ion-navicon"></i>',
      tap: function(e) {
        debugger;
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
      type: 'button-clear button-assertive',
      content: '<i class="ion-plus large"></i>',
      tap: function(e) {
        $scope.newTask();
      }
    }
  ];

  $scope.projects = ProjectService.all();

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


