angular.module('frankie.services')

.factory('currentProject', function(currentDate) {
  
  var makeProject = function () {
    return {
      start: currentDate,
      end: currentDate,
      timeline: [],
      client: {}
    };
  };

  var project = makeProject();

  return {
    set: function (key, value) {
      project[key] = value;
    },
    get: function (key) {
      return project[key];
    },
    all: function () {
      // Simple index lookup
      return project;
    },
    create: function(projectJSON) {
      project = projectJSON;
    },
    clear: function() {
      project = makeProject();
    }
  };
});