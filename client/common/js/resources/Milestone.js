angular.module('resources.Milestone', [])

.factory('Milestone', function($resource) {
  return $resource('https://api.parse.com/1/classes/Milestone/:objectId', null, {
    update: {method:'PUT'}
  });
});
