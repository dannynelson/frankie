angular.module('models.Timeline', ['models.Milestone'])

.factory('Timeline', function($q, Milestone) {
  return Parse.Collection.extend({
    model: Milestone
  });
});
