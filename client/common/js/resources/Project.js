angular.module('resources.Project', ['services.currentDate', 'resources.Client', 'resources.Timeline', 'resources.User'])

.factory('Project', function($resource) {
  return $resource('https://api.parse.com/1/classes/Project/:objectId', null, {
    update: {method:'PUT'}
  });
});
