/**
 * A service for sharing the current current project scaffold
 * and sharing across multiple scopes
 */

angular.module('services.currentProject', [])

.factory('currentProject', function(currentDate) {
  var makeProject = function () {
    return {
      start: currentDate,
      end: currentDate,
      timeline: [],
      client: {},
      address: {}
    };
  };

  var project = makeProject();

  return {
    all: function () {
      return project;
    },
    clear: function() {
      project = makeProject();
    }
  };
});
