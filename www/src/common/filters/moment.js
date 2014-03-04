// all dates should be in YYYY-MM-DD format
angular.module('filters.moment', [])

// converts to time from now, e.g. in a month
.filter('moment.fromNow', function() {
  return function(date) {
    var result = moment(date, "YYYY-MM-DD").fromNow();
    if (result.indexOf('hour') !== -1) result = 'today';
    return result;
  };
})

// converts to time from new, e.g. Jan 15th
.filter('moment.formatShort', function() {
  return function(date) {
    return moment(date).format("MMM Do");
  };
})

// converts to time from new, e.g. January, 2015
.filter('moment.formatLong', function() {
  return formatMonth = function(date) {
    return moment(date).format("MMMM, YYYY");
  };
});
