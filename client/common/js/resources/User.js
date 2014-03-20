angular.module('resources.User', [])

.factory('User', function($resource) {
  var address = 'https://api.parse.com/1/users/:objectId';
  var params = null;
  var actions = {
    update: {method:'PUT'}
  };
  return $resource(address, params, actions);
});
