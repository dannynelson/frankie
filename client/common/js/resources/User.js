angular.module('resources.User', [])

.factory('User', function($resource, $http) {
  return $resource('https://api.parse.com/1/users');
});
