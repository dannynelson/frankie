angular.module('models.Milestone', [])

.factory('Milestone', function($q) {
  return Parse.Object.extend('Milestone');
});
