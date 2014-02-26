angular.module('frankie.controllers')

.controller('CalendarCtrl', function($scope, $location, calendar) {

  // Get Data
  // -------------------------------
  // Over-due calendar events
  var calendar = calendar.create();
  $scope.overDue = calendar.overDue;
  $scope.calendar = calendar.upcoming;

  // Header
  // -------------------------------
  $scope.title = 'Calendar';
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

});


