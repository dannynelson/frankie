// TODO: lazy load the template directories

angular.module('main.projects', [
  'main.projects.projectList',
  'main.projects.calendar',
  'main.projects.archives',
  'main.projects.newAddress',
  'main.projects.newClient',
  'main.projects.newMilestone',
  'main.projects.newProject',
  'main.projects.newTimeline',
  'main.projects.projectDetail'
])

.config(function($stateProvider) {
  $stateProvider.state('main.projects', {
    url: '/projects',
    templateUrl: 'templates/animation-view.tpl.html',
    controller: 'ProjectsCtrl'
  });
})

.controller('ProjectsCtrl', function() {
});


