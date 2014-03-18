/**
 * A service for creating the current project scaffold
 * and sharing across multiple scopes
 */

angular.module('services.currentProject', [])

.factory('currentProject', function(currentDate) {
  var Project = Parse.Object.extend('Project');
  var defaults = {
    start: currentDate,
    end: currentDate,
    timeline: [],
    client: {},
    address: {},
    completed: false
  };
  var project = new Project(defaults);

  return {
    all: function () {
      return project;
    },

    // overwrite old project
    clear: function() {
      project = new Project(defaults);
    },

    // creates currentProject from existing Parse object
    create: function(parseProject) {
      project = parseProject;
    },

    // adds user and ACL for new project
    save: function(onSuccess) {
      project.set("user", Parse.User.current());
      project.setACL(new Parse.ACL(Parse.User.current()));
      project.save(null, {
        success: onSuccess,
        error: function(object, error) {
          alert('Failed to create new object, with error code: ' + error.description);
        }
      });
    },

    // updates existing project
    update: function(onSuccess) {
      project.save(null, {
        success: onSuccess,
        error: function(object, error) {
          alert('Failed to create new object, with error code: ' + error.description);
        }
      });
    }
  };
});
