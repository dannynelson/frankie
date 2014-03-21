angular.module('main.analytics', ['services.projects', 'services.currentDate'])

.config(function($stateProvider) {
  $stateProvider.state('main.analytics', {
    url: '/analytics',
    templateUrl: 'main/analytics/analytics.tpl.html',
    controller: 'AnalyticsCtrl',
    resolve: {
      completedProjects: function(projects) {
        return projects.all();
      },
      uncompletedProjects: function(projects) {
        return projects.allArchives();
      }
    }
  });
})

.controller('AnalyticsCtrl', function($scope, completedProjects, uncompletedProjects, currentDate) {
  $scope.completedProjects = completedProjects;
  $scope.uncompletedProjects = uncompletedProjects;

  $scope.totalIncome = function(projects) {
    return projects.reduce(function(accum, project) {
      return accum + project.price;
    }, 0) || '0';
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
