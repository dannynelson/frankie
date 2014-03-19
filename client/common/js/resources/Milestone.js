angular.module('resources.Milestone', [])

.factory('Milestone', function($q) {
  return Parse.Object.extend('Milestone');
});
