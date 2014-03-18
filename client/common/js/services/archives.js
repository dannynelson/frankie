angular.module('services.archives', ['models.ProjectCollection', 'models.Project', 'models.User'])

.factory('archives', function(Project, ProjectCollection, User) {
  var fetched = false;
  var archives = new ProjectCollection();
  var query = new Parse.Query(Project);
  query.equalTo('completed', true);
  archives.query = query;

  return {
    all: function() {
      if (!fetched) {
        var d = $q.defer();
        archives.fetch({
          success: function(collection) {
            fetched = true;
            d.resolve(collection);
          }
        });
        return d.promise;
      } else {
        return archives;
      }
    }
  };
});
