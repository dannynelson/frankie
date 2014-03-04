// TODO: only add new events when created, don't completely reload calendar each time
angular.module('services.makeCalendar', ['services.currentDate', 'resources.projects'])

.factory('makeCalendar', function(Projects, currentDate) {
  
  // Create a calendar from all project events
  var create = function () {
    var events = [];
    // convert current date to milliseconds, for easier comparison
    currentDate = + new Date(currentDate);
    // Calendar categories
    var upcoming = {};
    var overDue = [];

    // Make Events:
    Projects.all().forEach(function (project) {
      // Class for creating events
      var Event = function (title, date) {
        this.projectId = project.id,
        this.projectTitle = project.title,
        this.photo = project.photo,
        this.title = title,
        // date formatted for moment.js
        this.date = date;
        // date converted to milliseconds for ordering
        this.orderingDate = + new Date(date);
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

    // Make Calendar: { YYYY-MM: [array of events] }
    for (var i = 0; i < events.length; i++) {
      var myEvent = events[i];
      // if date is before current date, add to overDue
      if (myEvent.orderingDate < currentDate) {
        overDue.push(myEvent);
        continue;
      }
      // otherwise, add to upcoming events
      // - Add 1 to date so that moment.js displays renders month correctly (YYYY-MM+1)
      var date = myEvent.date.slice(0, -3).split('-');
      date[1] = String(parseInt(date[1], 10) + 1);
      date[1] = date[1].length === 1 ? '0' + date[1] : date[1];
      date = date.join('-');

      upcoming[date] = upcoming[date] || [];
      upcoming[date].push(myEvent);
    }

    return {
      upcoming: upcoming,
      overDue: overDue
    };
  };
  // $rootScope.$on("eventCreated", service.SaveState);

  return {
    create: create
  };
});