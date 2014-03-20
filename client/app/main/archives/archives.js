angular.module('main.archives', ['services.projects'])

// Shares the same template as projects
.config(function($stateProvider) {
  $stateProvider.state('main.archives', {
    url: '/archives',
    templateUrl: 'main/projects/projects.tpl.html',
    controller: 'ArchivesCtrl'
  });
})

.controller('ArchivesCtrl', function($scope, $location, projects) {
  projects.allArchives().then(function(archives) {
    $scope.projects = archives;
  });
  $scope.title = 'Archives';
  $scope.courtesyMessage = 'You currently don\'t have any archives. You will see projects show up here after you complete them.';
});
