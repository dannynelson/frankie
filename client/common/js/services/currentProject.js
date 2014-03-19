/**
 * A service for creating the current project scaffold
 * and sharing across multiple scopes
 */

angular.module('services.currentProject', ['resources.Project'])

.factory('currentProject', function(Project) {
  var currentProject = new Project();
  return {
    get: function() {
      return currentProject;
    },
    set: function(existingProject) {
      currentProject = existingProject;
    },
    reset: function() {
      currentProject = new Project();
    }
  };
});
