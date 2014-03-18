/**
 * A service for creating the current project scaffold
 * and sharing across multiple scopes
 */

angular.module('services.currentProject', ['models.Project'])

.factory('currentProject', function(Project) {
  var currentProject = new Project();

  return {
    all: function () {
      return currentProject;
    },

    // overwrite old project
    clear: function() {
      currentProject = new Project();
    },

    // creates currentProject from existing Parse object
    create: function(existingProject) {
      currentProject = existingProject;
    }

    // adds user and ACL for new project
    // save: function(onSuccess) {
    //   project.save(null, {
    //     success: onSuccess,
    //     error: function(object, error) {
    //       alert('Failed to create new object, with error code: ' + error.description);
    //     }
    //   });
    // },

    // // updates existing project
    // update: function(onSuccess) {
    //   project.save(null, {
    //     success: onSuccess,
    //     error: function(object, error) {
    //       alert('Failed to create new object, with error code: ' + error.description);
    //     }
    //   });
    // }
  };
});
