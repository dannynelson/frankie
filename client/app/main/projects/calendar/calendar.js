angular.module('main.projects.calendar', ['services.makeCalendar', 'services.projects'])

.config(function($stateProvider) {
  $stateProvider.state('main.projects.calendar', {
    url: '/calendar',
    templateUrl: 'main/projects/calendar/calendar.tpl.html',
    controller: 'CalendarCtrl',
    resolve: {
      projects: function (projects) {
        return projects.all();
      }
    }
  });
})

.controller('CalendarCtrl', function($scope, makeCalendar, projects) {
  var calendar = makeCalendar.create(projects);
  $scope.overDue = calendar.overDue;
  $scope.calendar = calendar.upcoming;

  $scope.courtesyMessage = 'You don\'t have any events for your calendar. Create a project to see some events show up here.';
});


