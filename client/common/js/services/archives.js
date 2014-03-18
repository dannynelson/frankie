angular.module('services.archives', ['models.ProjectCollection', 'models.Project', 'models.User'])

.factory('archives', function(Project, ProjectCollection, User) {
  var archives = new ProjectCollection();
  var query = new Parse.Query(Project);
  // query.equalTo('user', User.current());
  query.equalTo('completed', true);
  archives.query = query;

  return archives;
});
