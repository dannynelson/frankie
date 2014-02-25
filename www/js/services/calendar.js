angular.module('frankie.services')

.factory('calendar', function(projects, currentDate) {
  
  // Calendar categories
  var upcoming = {};
  var overDue = [];
  var events = [];

  // Make Events:
  projects.all().forEach(function (project) {
    // Class for creating events
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
    // if date is before current date, add to overDue
    if (myEvent.date < currentDate) {
      overDue.push(myEvent);
      continue;
    }
    // otherwise, add to upcoming events
    // - Add 1 to date so that moment.js displays renders month correctly (YYYY-MM+1)
    var date = myEvent.date.slice(0, -3).split('-');
    date[1] = String(parseInt(date[1]) + 1);
    date[1] = date[1].length === 1 ? '0' + date[1] : date[1];
    date = date.join('-');

    upcoming[date] = upcoming[date] || [];
    upcoming[date].push(myEvent);
  }

  return {
    upcoming: upcoming,
    overDue: overDue
  };
});