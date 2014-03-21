/**
 * An instance of resource User for sharing throughout the project.
 */

angular.module('services.currentUser', ['resources.User'])

.factory('currentUser', function($q, User) {
  var currentUser;
  return {
    get: function(onSuccess) {
      return currentUser;
    },
    set: function(user) {
      currentUser = new User(user);
    },
    save: function(onSuccess) {
      var userClone = _.clone(currentUser);
      currentUser.$update({objectId: currentUser.objectId}, function() {
        currentUser = new User(userClone);
        onSuccess();
      });
    }
  };
});
