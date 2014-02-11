angular.module('frankie.controllers')

.controller('CalendarCtrl', function($scope, $location, projects, moment, currentDate) {

  // Get Data
  // -------------------------------
  // Over-due calendar events
  $scope.overDue = [];

  // All future calendar events
  $scope.calendar = (function () {
    var events = [];
    // object matching events to months
    var calendar = {};

    // Make Events:
    // go through each project, and extract the start, end, and milestone events
    projects.all().forEach(function (project) {
      var Event = function (title, date) {
        this.projectId = project.id,
        this.projectTitle = project.title,
        this.photo = project.photo,
        this.title = title,
        // date formatted for moment.js
        this.date = date;
        // date formatted so that angular orderBy sorts it correctly
        this.orderingDate = new Date(date);
      };

      // Add start/end project events
      events.push(new Event('Start Project', project.start));
      events.push(new Event('Finish Project', project.end));

      // Add timeline events
      if (project.timeline.length) {
        project.timeline.forEach(function (milestone) {
          events.push(new Event(milestone.title, milestone.date));
        });
      }
    });

    // Make Calendar:
    // push each event to a YYYY-MM property
    for (var i = 0; i < events.length; i++) {
      var myEvent = events[i];
      // if date is before current date, add to $scope.overDue
      if (myEvent.date < currentDate) {
        $scope.overDue.push(myEvent);
        continue;
      }

      // Add 1 to date because of javascript stupidity (YYYY-MM+1)
      var date = myEvent.date.slice(0, -3).split('-');
      date[1] = String(parseInt(date[1]) + 1);
      date[1] = date[1].length === 1 ? '0' + date[1] : date[1];
      date = date.join('-');

      calendar[date] = calendar[date] || [];
      calendar[date].push(myEvent);
    }

    return calendar;
  })();

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

  // Methods
  // ---------------------------------
  $scope.fromNow = moment.fromNow;
  $scope.formatMonth = moment.formatMonth;

});


