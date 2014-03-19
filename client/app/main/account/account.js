angular.module('main.account', ['resources.User'])

.config(function($stateProvider) {
  $stateProvider.state('main.account', {
    url: '/account',
    templateUrl: 'main/account/account.tpl.html',
    controller: 'AccountCtrl',
    resolve: {
      user: function(User) {
        return User.getAttributes();
      }
    }
  });
})

.controller('AccountCtrl', function($scope, user) {
  $scope.title = 'Account';
  $scope.user = user;
});
