angular.module('frankie.controllers')

.controller('NewTimelineCtrl', function($scope, $location, currentProject, currentDate) {
  
  // Get Data
  // ----------------------------
  $scope.timeline = currentProject.get('timeline');

  // Set Header
  // ----------------------------
  $scope.title = 'Timeline';
  $scope.leftButtons = [];
  $scope.rightButtons = [
    {
      type: 'button-icon button-clear button-assertive',
      content: '<i class="ion-plus large"></i>',
      tap: function(e) {
        $scope.addMilestone();
      }
    }
  ];

  // Methods
  // ----------------------------
  $scope.addMilestone = function () {
    $scope.timeline.push({title: '', date: currentDate});
  };

});