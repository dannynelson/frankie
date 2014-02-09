angular.module('frankie.services')

// TODO: figure out a way to only inject moment here
.factory('moment', function() {

  // converts to time from new, e.g. in a month
  // date is YYYY-MM-DD
  var fromNow = function(date) {
    return moment(date, "YYYY-MM-DD").fromNow();
  };

  // converts date to just month and day
  // date is YYYY-MM-DD
  var format = function(date) {
    return moment(date).format("MMM Do");
  };

  return {
    fromNow: fromNow,
    format: format
  };

});