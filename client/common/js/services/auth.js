angular.module('services.auth', ['resources.User', 'resources.Login', 'services.currentUser'])

.factory('auth', function(User, Login, $http, currentUser) {
  var saveUser = function(user) {
    currentUser.set(user);
    $http.defaults.headers.common['X-Parse-Session-Token'] = user.sessionToken;
    localStorage.sessionToken = user.sessionToken;
  };

  var deleteUser = function() {
    currentUser.set(null);
    delete $http.defaults.headers.common['X-Parse-Session-Token'];
    delete localStorage.sessionToken;
  };

  return {
    // user must have username and password properties
    signin: function(user, onSuccess) {
      Login.get({
        username: user.username,
        password: user.password
      }, function(user) {
        saveUser(user);
        onSuccess();
      });
    },
    // user must have username and password properties
    signup: function(user, onSuccess) {
      user.$save(user, function(user) {
        saveUser(user);
        onSuccess();
      });
    },
    signout: function() {
      deleteUser();
    },
    checkForSession: function() {
      if (localStorage.sessionToken) {
        $http.defaults.headers.common['X-Parse-Session-Token'] = localStorage.sessionToken;
        $http.get('https://api.parse.com/1/users/me').success(function(user) {
          debugger;
          currentUser.set(user);
        });
      }
    }
  };
});

 
