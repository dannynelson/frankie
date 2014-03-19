angular.module('resources.Login', [])

.factory('Login', function($resource) {
  return $resource('https://api.parse.com/1/login');
});
