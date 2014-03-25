angular.module('main.projects.archives', ['services.projects'])

// Shares the same template as projects
.config(function($stateProvider) {
  $stateProvider.state('main.projects.archives', {
    url: '/archives',
    templateUrl: 'templates/project-list.tpl.html',
    controller: 'ArchivesCtrl'
  });
})

.controller('ArchivesCtrl', function($scope, projects) {
  projects.allArchives().then(function(archives) {
    $scope.projects = archives;
  });
  $scope.title = 'Archives';
  $scope.courtesyMessage = 'You currently don\'t have any archives. You will see projects show up here after you complete them.';
});
