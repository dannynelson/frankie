/**
 * An instance of resource Project for sharing through app
 * Better than local storage because it is readily sharable between controllers without saving first
 */

angular.module('services.currentProject', ['resources.Project', 'services.currentDate', 'services.currentUser'])

.factory('currentProject', function(Project, currentUser, currentDate) {
  var user = currentUser.get();
  var currentProject;
  debugger;
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
        user: {
          '__type': 'Pointer',
          'className': '_User',
          'objectId': user.objectId
        },
        client: {},
        address: {},
        timeline: [],
        completed: false,
        ACL: {}
      });
      currentProject.ACL[user.objectId] = {
        read: true,
        write: true
      };
    }
  };
});
