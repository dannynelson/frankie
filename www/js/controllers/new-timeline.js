angular.module('frankie.controllers')

.controller('NewTimelineCtrl', function($scope, $stateParams, $location, CurrentProjectService) {
  
  // Get Data
  // ----------------------------
  var milestone = {
    title: '',
    date: ''
  };

  $scope.timeline = CurrentProjectService.get('timeline') || [milestone];

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

  // Listeners
  // ----------------------------
  // Listen for when back button is pressed
  // Event broadcast added to viewBack directive
  $scope.$on('back', function(event) {
    CurrentProjectService.set('timeline', $scope.timeline);
  });

  // Methods
  // ----------------------------
  $scope.addMilestone = function () {
    $scope.timeline.push(milestone);
  };

});