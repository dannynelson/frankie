angular.module('resources.User', [])

.factory('User', function($resource) {
  return $resource('https://api.parse.com/1/users', null, {
    update: {method:'PUT'}
  });
});
