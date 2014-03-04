angular.module('frankie.main.archives', ['frankie.main', 'resources.projects'])

// Shares the same template as projects
.config(function($stateProvider) {
  $stateProvider.state('main.archives', {
    url: '/archives',
    templateUrl: 'main/projects/projects.tpl.html',
    controller: 'ArchivesCtrl',
    resolve: {
      archives: function (Projects) {
        return Projects.archives();
      }
    }
  });
})

.controller('ArchivesCtrl', function($scope, $location, archives) {

  // Get Data
  // -------------------------------
  $scope.projects = archives;

  // Header
  // -------------------------------
  $scope.title = 'Archives';

});
