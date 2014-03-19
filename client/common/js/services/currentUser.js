angular.module('services.currentUser', ['resources.User'])

.factory('currentUser', function() {
  var currentUser = null;
  return {
    get: function() {
      return currentUser;
    },
    set: function(user) {
      currentUser = new User(user);
    }
  };
});
