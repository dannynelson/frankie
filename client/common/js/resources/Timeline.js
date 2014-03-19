angular.module('resources.Timeline', ['resources.Milestone'])

.factory('Timeline', function($q, Milestone) {
  return Parse.Collection.extend({
    model: Milestone
  });
});
