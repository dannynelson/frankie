/**
 * A service for creating the current project scaffold
 * and sharing across multiple scopes
 *
 * Better than local storage because it is readily sharable between controllers without saving first
 */

angular.module('services.currentProject', ['resources.Project', 'services.currentDate'])

.factory('currentProject', function(Project, currentDate) {
  var currentProject;

  return {
    get: function() {
      return currentProject;
    },
    set: function(existingProject) {
      currentProject = existingProject;
    },
    reset: function() {
      currentProject = new Project({
        start: currentDate,
        end: currentDate,
        client: {},
        address: {},
        timeline: [],
        completed: false,
        ACL: {
          
          read: true,
          write: true
        }
      });
    }
  };
});
