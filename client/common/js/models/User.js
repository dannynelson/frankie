angular.module('models.User', [])

.factory('User', function($resource, $http) {
  var User = $resource('https://api.parse.com/1/users');
  var Login = $resource('https://api.parse.com/1/login');

  return {
    signin: function(username, password, onSuccess) {
      debugger;
      Login.get({
        username: username,
        password: password
      }, function(response) {
        $http.defaults.headers.common['X-Parse-Session-Token'] = response.sessionToken;
        onSuccess();
      });
    },
    signup: function(user, onSuccess) {
      var user = new User(user);
      user.$save(user, function(response) {
        $http.defaults.headers.common['X-Parse-Session-Token'] = response.sessionToken;
        onSuccess();
      });
    }
  };
});
