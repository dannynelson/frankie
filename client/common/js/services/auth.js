angular.module('services.auth', ['resources.User', 'resources.Login', 'services.currentUser'])

.factory('auth', function(User, Login, $http, currentUser) {
  var saveUser = function(user) {
    $http.defaults.headers.common['X-Parse-Session-Token'] = user.sessionToken;
    localStorage.sessionToken = user.sessionToken;
    // delete session token we do not want it as part of the requests
    delete user.sessionToken;
    currentUser.set(user);
  };

  var deleteUser = function() {
    currentUser.set(null);
    delete $http.defaults.headers.common['X-Parse-Session-Token'];
    delete localStorage.sessionToken;
  };

  return {
    // user must have username and password properties
    signin: function(user, onSuccess) {
      debugger;
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
    checkForSession: function(onSuccess) {
      if (localStorage.sessionToken) {
        $http.defaults.headers.common['X-Parse-Session-Token'] = localStorage.sessionToken;
        onSuccess();
        $http.get('https://api.parse.com/1/users/me').success(function(user) {
          delete user.sessionToken;
          currentUser.set(user);
        });
      }
    }
  };
});

 
