angular.module('main.account', ['services.currentUser'])

.config(function($stateProvider) {
  $stateProvider.state('main.account', {
    url: '/account',
    templateUrl: 'main/account/account.tpl.html',
    controller: 'AccountCtrl',
    resolve: {
      user: function(currentUser) {
        return currentUser.get();
      }
    }
  });
})

.controller('AccountCtrl', function($scope, user) {
  $scope.user = user;
});
