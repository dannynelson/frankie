angular.module('main.profile', ['resources.user', 'filters.phone'])

.config(function($stateProvider) {
  $stateProvider.state('main.profile', {
    url: '/profile',
    templateUrl: 'main/profile/profile.tpl.html',
    controller: 'ProfileCtrl',
    resolve: {
      user: function(User) {
        return User.get();
      }
    }
  });
})

.controller('ProfileCtrl', function($scope, $location, user) {
  $scope.title = 'Profile';
  $scope.leftButtons = [];
  $scope.rightButtons = [{
    type: 'button-clear button-assertive',
    content: '<button>edit</button>',
    tap: function(e) {
      $location.url('/main/new-profile');
    }
  }];
  $scope.user = user;
});
