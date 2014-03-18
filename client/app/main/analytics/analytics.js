angular.module('main.analytics', ['models.Project', 'services.currentDate'])

.config(function($stateProvider) {
  $stateProvider.state('main.analytics', {
    url: '/analytics',
    templateUrl: 'main/analytics/analytics.tpl.html',
    controller: 'AnalyticsCtrl',
    resolve: {
      completedProjects: function(Projects) {
        return Projects.filter('completed', true);
      },
      uncompletedProjects: function(Projects) {
        return Projects.filter('completed', false);
      }
    }
  });
})

.controller('AnalyticsCtrl', function($scope, completedProjects, uncompletedProjects, currentDate) {
  $scope.completedProjects = completedProjects;
  $scope.uncompletedProjects = uncompletedProjects;
  $scope.title = 'Analytics';

  $scope.totalIncome = function(projects) {
    return projects.reduce(function(accum, project) {
      return accum + project.price;
    }, 0);
  };

  $scope.totalOverdue = function(projects) {
    return projects.filter(function(project) {
      return +new Date(project.end) < +new Date(currentDate);
    }, 0).length;
  };

  $scope.completedLate = function(projects) {
    return projects.filter(function(project) {
      return +new Date(project.end) < +new Date(project.completedDate);
    }, 0).length;
  };
});
