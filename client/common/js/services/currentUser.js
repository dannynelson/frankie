/**
 * An instance of resource User for sharing throughout the project.
 */

angular.module('services.currentUser', ['resources.User'])

.factory('currentUser', function(User) {
  var currentUser;
  return {
    get: function() {
      return currentUser;
    },
    set: function(user) {
      currentUser = new User(user);
    }
  };
});
