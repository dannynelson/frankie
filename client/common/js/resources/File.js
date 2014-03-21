angular.module('resources.File', [])

.factory('File', function($resource, currentUser) {
  var address = 'https://api.parse.com/1/files/:fileName';
  var params = {};
  var actions = {
    upload: {
      method: "POST",
      isArray: false,
      headers: {'Content-Type':'image/jpeg'}
    }
  };
  return $resource(address, params, actions);
});
