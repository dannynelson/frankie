angular.module('main.account.index', ['services.currentUser'])

.config(function($stateProvider) {
  $stateProvider.state('main.account.index', {
    url: '/index',
    templateUrl: 'main/account/index/index.tpl.html',
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
