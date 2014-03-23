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
  // do not modify currentUser in case they cancel
  currentUser.set(_.clone(user));
  $scope.user = user;
  
  $scope.leftButtons = [{
    type: 'button-clear button-assertive',
    content: 'Cancel',
    tap: function(e) {
      $rootScope.$viewHistory.backView.go();
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
    var updateUser = function() {
      // clone user because it is overrwritten when the resource is retrieved
      var userClone = _.clone(user);
      user.$update({objectId: user.objectId}, function(retrievedUser) {
        currentUser.set(userClone);
        $rootScope.$viewHistory.backView.go();
      });
    };

    if ($scope.newPhoto) {
      photo.save(user.photo, function(response) {
        user.photo = response.url();
        updateUser();
      });
    } else {
      updateUser();
    }
  };

  $scope.getPhoto = function () {
    $scope.newPhoto = true;
    photo.get(function(imageData) {
      $scope.$apply(function () {
        $scope.user.photo = "data:image/jpeg;base64," + imageData;
      });
    });
  };
});
