angular.module('services.auth', [
  'resources.User',
  'resources.Login',
  'services.currentUser',
  'services.emailValidation'
])

.factory('auth', function(User, Login, $http, currentUser, emailValidation) {
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
    requestPasswordReset: function(email) {
      $http({
        method: 'POST',
        url: 'https://api.parse.com/1/requestPasswordReset',
        data: {
          email: email
        }
      }).success(function() {
        alert('An email has been sent to you with instructions about how to reset your password');
      });
    },
    // user must have username and password properties
    signin: function(user, onSuccess) {
      if (!emailValidation(user.username)) {
        alert('That is not a valid email address!');
      } else {
        Login.get({
          username: user.username,
          password: user.password
        }, function(user) {
          saveUser(user);
          onSuccess();
        }, function(response) {
          alert('Invalid email or password!');
        });
      }
    },
    // user must have username and password properties
    signup: function(user, onSuccess) {
      if (!emailValidation(user.username)) {
        alert('That is not a valid email address!');
      } else {
        // copy username into email so that parse can do password resets
        user.email = user.username;
        user.address = {};
        user.$save(user, function(user) {
          saveUser(response);
          onSuccess();
        }, function(response) {
          alert(response.data.error);
        });
      }
    },
    signout: function() {
      deleteUser();
    },
    checkForSession: function(onSuccess) {
      if (localStorage.sessionToken) {
        $http.defaults.headers.common['X-Parse-Session-Token'] = localStorage.sessionToken;
        // Execute callback immediately, even if user has not been completely retrieved yet
        onSuccess();
        $http.get('https://api.parse.com/1/users/me').success(function(user) {
          delete user.sessionToken;
          currentUser.set(user);
        });
      }
    }
  };
});

 
