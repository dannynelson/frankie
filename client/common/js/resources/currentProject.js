angular.module('resources.currentProject', [])

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
    set: function (key, value) {
      project[key] = value;
    },
    get: function (key) {
      return project[key];
    },
    all: function () {
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
