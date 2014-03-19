
angular.module('resources.Client', [])

.factory('Client', function($q) {
  return Parse.Object.extend('Client');
});
