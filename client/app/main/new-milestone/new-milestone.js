angular.module('main.newMilestone', ['services.photo', 'services.currentProject'])

.config(function($stateProvider) {
  $stateProvider.state('main.newMilestone', {
    url: '/new-milestone/:id',
    templateUrl: 'main/new-milestone/new-milestone.tpl.html',
    controller: 'NewMilestoneCtrl'
  });
})

.controller('NewMilestoneCtrl', function($scope, $rootScope, $stateParams, photo, currentProject) {
  $scope.milestone = currentProject.get().timeline[$stateParams.id];

  $scope.title = $scope.milestone.title;
  $scope.leftButtons = [];
  $scope.rightButtons = [];

  $scope.completeMilestone = function (milestone) {
    milestone.completed = true;
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
