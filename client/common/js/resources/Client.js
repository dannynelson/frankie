
angular.module('resources.Client', [])

.factory('Client', function($resource) {
  return $resource('https://api.parse.com/1/classes/Client/:objectId', null, {
    update: {method:'PUT'}
  });
});
