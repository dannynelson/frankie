angular.module('services.auth', ['resources.User', 'resources.Login'])

.factory('auth', function(User, Login, $http) {
  return {
    // user must have username and password properties
    signin: function(user, onSuccess) {
      debugger;
      Login.get({
        username: user.username,
        password: user.password
      }, function(response) {
        $http.defaults.headers.common['X-Parse-Session-Token'] = response.sessionToken;
        onSuccess();
      });
    },
    // user must have username and password properties
    signup: function(user, onSuccess) {
      user.$save(user, function(response) {
        $http.defaults.headers.common['X-Parse-Session-Token'] = response.sessionToken;
        onSuccess();
      });
    },
    signout: function(onSuccess) {
      delete $http.defaults.headers.common['X-Parse-Session-Token'];
      onSuccess();
    }
  };
});

 
