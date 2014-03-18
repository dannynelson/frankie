angular.module('models.Project', ['models.Client', 'models.Timeline', 'services.currentDate', 'models.User'])

.factory('Project', function($q, Client, Timeline, User, currentDate) {
  return Parse.Object.extend({
    className: 'Project',

    initialize: function() {
      this.user = User.current();
      this.setACL(new Parse.ACL(this.user));
      this.client = new Client();
      this.timeline = new Timeline();
      this.start = currentDate;
      this.end = currentDate;
    },

    defaults: {
      address: {},
      completed: false
    }
  });
});
