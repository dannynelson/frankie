angular.module('main.account.profile', ['services.currentUser', 'filters.phone'])

.config(function($stateProvider) {
  $stateProvider.state('main.account.profile', {
    url: '/profile',
    templateUrl: 'main/account/profile/profile.tpl.html',
    controller: 'ProfileCtrl',
    resolve: {
      user: function(currentUser) {
        debugger;
        return currentUser.get();
      }
    }
  });
})

.controller('ProfileCtrl', function($scope, $location, user) {
  $scope.user = user;
  
  $scope.leftButtons = [];
  $scope.rightButtons = [{
    type: 'button-clear button-assertive',
    content: '<button>edit</button>',
    tap: function(e) {
      $location.url('/main/new-profile');
    }
  }];
});
