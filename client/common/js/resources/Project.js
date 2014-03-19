angular.module('resources.Project', ['services.currentUser'])

.factory('Project', function($resource, currentUser) {
  var address = 'https://api.parse.com/1/classes/Project/:objectId';
  var params = null;
  var actions = {
    update: { method:'PUT' }
  };
  return $resource(address, params, actions);
});
