angular.module('main.newProfile', ['services.currentUser', 'filters.phone', 'services.photo'])

.config(function($stateProvider) {
  $stateProvider.state('main.newProfile', {
    url: '/new-profile',
    templateUrl: 'main/new-profile/new-profile.tpl.html',
    controller: 'NewProfileCtrl',
    resolve: {
      user: function(currentUser) {
        return currentUser.get();
      }
    }
  });
})

.controller('NewProfileCtrl', function($scope, $rootScope, user, currentUser, photo) {
  $scope.user = user;
  
  $scope.leftButtons = [{
    type: 'button-clear button-assertive',
    content: 'Cancel',
    tap: function(e) {
      $scope.returnToProjects();
    }
  }];

  $scope.rightButtons = [{
    type: 'button-clear button-assertive',
    content: 'Save',
    tap: function(e) {
      $scope.save($scope.user);
    }
  }];

  $scope.save = function(user) {
    // clone user because it is overrwritten when the resource is retrieved
    var userClone = _.clone(user);
    user.$update({objectId: user.objectId}, function(retrievedUser) {
      currentUser.set(userClone);
      $rootScope.$viewHistory.backView.go();
    });
  };

  $scope.getPhoto = function () {
    photo.get(function(imageData) {
      $scope.$apply(function () {
        $scope.project.photo = "data:image/jpeg;base64," + imageData;
      });
    });
  };
});
