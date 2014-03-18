angular.module('services.projects', ['models.ProjectCollection', 'models.Project', 'models.User'])

.factory('projects', function($q, Project, ProjectCollection, User) {
  var fetched = false;
  var projects = new ProjectCollection();
  var query = new Parse.Query(Project);
  query.equalTo('completed', false);
  projects.query = query;

  return {
    all: function() {
      if (!fetched) {
        var d = $q.defer();
        projects.fetch({
          success: function(collection) {
            fetched = true;
            d.resolve(collection);
          }
        });
        return d.promise;
      } else {
        return projects;
      }
    }
  };


  // var d = $q.defer();
  // projects.fetch({
  //   success: function(collection) {
  //     d.resolve(collection.models);
  //   }
  // });
  // return d.promise;
});
