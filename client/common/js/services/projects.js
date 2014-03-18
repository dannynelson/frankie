angular.module('services.projects', ['models.ProjectCollection', 'models.Project', 'models.User'])

.factory('projects', function(Project, ProjectCollection, User) {
  var projects = new ProjectCollection();
  var query = new Parse.Query(Project);
  // query.equalTo('user', User.current());
  query.equalTo('completed', false);
  projects.query = query;

  return projects;
});
