angular.module('frankie.controllers')


// A simple controller that fetches a list of data from a service
.controller('ProjectsCtrl', function($scope, $ionicModal, $location, ProjectService, moment) {

  // Retrieve Data
  // -------------------------------
  $scope.projects = ProjectService.all();

  
  // Set Navigation
  // -------------------------------
  $scope.title = 'Projects';
  // $scope.titleButtons =
  //   '<div class="button-bar">\
  //     <a class="button">Projects</a>\
  //     <a class="button">Calendar</a>\
  //   </div>';
  $scope.leftButtons = [
    {
      type: 'button-icon button-clear button-assertive',
      content: '<i class="icon ion-navicon"></i>',
      tap: function(e) {
        $scope.sideMenuController.toggleLeft();
      }
    }
  ];
  $scope.rightButtons = [
    {
      type: 'button-icon button-clear button-assertive',
      content: '<i class="ion-compose extra-large"></i>',
      tap: function(e) {
        // must specify new at end of state to get correct form
        $location.url('/main/new-project/new');
      }
    }
  ];

  // Event listeners
  // ---------------------------------
  // when project created, update all projects
  $scope.$on('projectCreated', function (event) {
    $scope.projects = ProjectService.all();
  });

  $scope.fromNow = moment.fromNow;

});


