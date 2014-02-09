angular.module('frankie.controllers')

.controller('NewMilestoneCtrl', function($scope, $rootScope, $stateParams, photo, currentProject) {
  
  // Get Data
  // ----------------------------
  $scope.milestone = currentProject.get('timeline')[$stateParams.id];

  // Header
  // ----------------------------
  $scope.title = $scope.milestone.title;
  $scope.leftButtons = [];
  $scope.rightButtons = [];

  // Methods
  // ----------------------------
  $scope.completeMilestone = function (milestone) {
    $rootScope.$viewHistory.backView.go();
  };

  $scope.getPhoto = function () {
    photo.get(function (imageData) {
      $scope.$apply(function () {
        $scope.milestone.photo = "data:image/jpeg;base64," + imageData;
      });
    });
  };
});