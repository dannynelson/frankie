angular.module('main.calendar', ['services.makeCalendar'])

.config(function($stateProvider) {
  $stateProvider.state('main.calendar', {
    url: '/calendar',
    templateUrl: 'main/calendar/calendar.tpl.html',
    controller: 'CalendarCtrl',
    resolve: {
      calendar: function (makeCalendar) {
        return makeCalendar.create();
      }
    }
  });
})

.controller('CalendarCtrl', function($scope, $location, calendar) {
  $scope.overDue = calendar.overDue;
  $scope.calendar = calendar.upcoming;

  $scope.title = 'Calendar';
  $scope.courtesyMessage = 'You don\'t have any events for your calendar. Create a project to see some events show up here.';
});


