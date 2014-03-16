angular.module('main.account', ['resources.user'])

.config(function($stateProvider) {
  $stateProvider.state('main.account', {
    url: '/account',
    templateUrl: 'main/account/account.tpl.html',
    controller: 'AccountCtrl',
    resolve: {
      user: function(User) {
        return User.get();
      }
    }
  });
})

.controller('AccountCtrl', function($scope, user) {
  $scope.title = 'Account';
  $scope.user = user;
});
