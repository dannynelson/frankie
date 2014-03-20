angular.module('resources.File', [])

.factory('File', function($resource, currentUser) {
  var address = 'https://api.parse.com/1/files/:fileName';
  var params = null;
  var actions = {
    headers: { 'Content-Type': 'text/plain' }
  };
  return $resource(address, params, actions);
});
