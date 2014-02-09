angular.module('frankie.controllers')

.controller('NewMilestoneCtrl', function($scope, $rootScope, $stateParams, currentProject) {
  
  // Get Data
  // ----------------------------
  $scope.milestone = currentProject.get('timeline')[$stateParams.id];

  // Set Header
  // ----------------------------
  $scope.title = $scope.milestone.title;
  $scope.leftButtons = [];
  $scope.rightButtons = [];

  // Methods
  // ----------------------------
  $scope.completeMilestone = function (milestone) {
    $rootScope.$viewHistory.backView.go();
  };

  $scope.takePhoto = function() {
    navigator.camera.getPicture(onSuccess, onFail, {
      quality: 20,
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 200,
      targetHeight: 150
    });
    function onSuccess(imageData) {
      $scope.$apply(function () {
        $scope.milestone.photo = "data:image/jpeg;base64," + imageData;
      });
    }
    function onFail(message) {
      alert('Failed because: ' + message);
    }
  };
});