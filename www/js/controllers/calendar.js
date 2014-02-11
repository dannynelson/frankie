angular.module('frankie.controllers')

.controller('CalendarCtrl', function($scope, $location, projects, moment) {

  // Get Data
  // -------------------------------
  $scope.events = (function () {
    var events = [];
    
    // go through each project, and extract the start, end, and milestone events
    projects.all().forEach(function (project) {
      var Event = function (title, date) {
        this.projectId = project.id,
        this.projectTitle = project.title,
        this.photo = project.photo,
        this.title = title,
        this.date = date;
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

    return events;
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

});


