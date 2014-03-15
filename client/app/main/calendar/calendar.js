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
});

