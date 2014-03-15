angular.module('main.archives', ['resources.projects'])

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
  $scope.projects = archives;
  $scope.title = 'Archives';
});
