angular.module('main.projects.newMilestone', [
  'services.photo',
  'services.currentProject',
  'services.loading'
])

.config(function($stateProvider) {
  $stateProvider.state('main.projects.newMilestone', {
    url: '/new-milestone/:id',
    templateUrl: 'main/projects/new-milestone/new-milestone.tpl.html',
    controller: 'NewMilestoneCtrl'
  });
})

.controller('NewMilestoneCtrl', function($scope, $rootScope, $stateParams, loading, photo, currentProject) {
  // save for reference when saving milestone
  $scope.project = currentProject.get();
  $scope.milestone = $scope.project.timeline[$stateParams.id];

  $scope.title = $scope.milestone.title;
  $scope.leftButtons = [{
    type: 'button-clear button-assertive',
    content: 'Cancel',
    tap: function(e) {
      $scope.milestone = {};
      $rootScope.$viewHistory.backView.go();
    }
  }];

  $scope.rightButtons = [{
    type: 'button-clear button-assertive',
    content: 'Save',
    tap: function(e) {
      $scope.completeMilestone($scope.milestone);
    }
  }];

  $scope.completeMilestone = function (milestone) {
    loading.show();
    var updateProjectAndReturn = function() {
      $scope.project.$update({objectId: $scope.project.objectId}, function(project) {
        loading.hide();
        $rootScope.$viewHistory.backView.go();
      });
    };
    milestone.completed = true;
    if (milestone.photo) {
      photo.save(milestone.photo, function(photo) {
        milestone.photo = photo.url;
        updateProjectAndReturn();
      });
    } else {
      updateProjectAndReturn();
    }
  };

  $scope.getPhoto = function () {
    photo.get(function(imageData) {
      $scope.$apply(function() {
        $scope.milestone.photo = "data:image/jpeg;base64," + imageData;
      });
    });
  };
});
