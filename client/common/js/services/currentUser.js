angular.module('services.currentUser', [])

.factory('currentUser', function() {
  var currentUser = null;
  return {
    get: function() {
      return currentUser;
    },
    set: function(user) {
      currentUser = user;
    }
  };
});
