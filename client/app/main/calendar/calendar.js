angular.module('main.calendar', ['services.makeCalendar', 'services.projects'])

.config(function($stateProvider) {
  $stateProvider.state('main.calendar', {
    url: '/calendar',
    templateUrl: 'main/calendar/calendar.tpl.html',
    controller: 'CalendarCtrl',
    resolve: {
      projects: function (projects) {
        return projects.all();
      }
    }
  });
})

.controller('CalendarCtrl', function($scope, $location, makeCalendar, projects) {
  var calendar = makeCalendar.create(projects);
  $scope.overDue = calendar.overDue;
  $scope.calendar = calendar.upcoming;

  $scope.courtesyMessage = 'You don\'t have any events for your calendar. Create a project to see some events show up here.';
});


