angular.module('main.newTimeline', ['services.currentProject'])

.config(function($stateProvider) {
  $stateProvider.state('main.newTimeline', {
    url: '/new-timeline',
    templateUrl: 'main/new-timeline/new-timeline.tpl.html',
    controller: 'NewTimelineCtrl',
    resolve: {
      timeline: function(currentProject) {
        return currentProject.get('timeline');
      }
    }
  });
})

.controller('NewTimelineCtrl', function($scope, $location, timeline, currentDate) {
  $scope.timeline = timeline;

  $scope.title = 'Timeline';
  $scope.leftButtons = [];
  $scope.rightButtons = [
    {
      type: 'button-icon button-clear button-assertive',
      content: '<i class="ion-minus large"></i>',
      tap: function(e) {
        $scope.removeMilestone();
      }
    },
    {
      type: 'button-icon button-clear button-assertive',
      content: '<i class="ion-plus large"></i>',
      tap: function(e) {
        $scope.addMilestone();
      }
    }
  ];
  $scope.courtesyMessage = 'Click the + and - buttons to add or remove milestones. Milestones help you subdivide your project into smaller tasks.';

  $scope.addMilestone = function () {
    $scope.timeline.push({title: '', date: currentDate});
  };
  $scope.removeMilestone = function () {
    $scope.timeline.pop();
  };
});
