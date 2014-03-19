angular.module('services.archives', ['resources.ProjectCollection', 'resources.Project', 'resources.User'])

.factory('archives', function($q, Project, loading) {
  
  var archives = [];

  var query = {
    // user: {
    //   __type: 'Pointer',
    //   className: '_User',
    //   objectId: 'gwhGqiyLjR'
    // },
    completed: true
  };

  var fetched = false;
  var fetchArchivesAndHideLoading = function(onSuccess) {
    var defer = $q.defer();

    Project.get({
      where: JSON.stringify(query)
    }, function(response) {
      loading.hide();
      archives = response.results;
      fetched = true;
      defer.resolve(archives);
    });

    return defer.promise;
  };

  return {
    all: function() {
      loading.show();
      if (!fetched) {
        return fetchArchivesAndHideLoading();
      } else {
        loading.hide();
        return archives;
      }
    },
    add: function(newArchive, onSuccess) {
      loading.show();
      newProject.$save(function(retrievedProject) {
        fetchArchivesAndHideLoading().then(onSuccess);
      });
    }
  };
});
