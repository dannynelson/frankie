angular.module('models.Client', [])

.factory('Client', function($q) {
  return Parse.Object.extend('Client');
});
