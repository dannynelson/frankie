angular.module('main.account', ['resources.user'])

.config(function($stateProvider) {
  $stateProvider.state('main.account', {
    url: '/account',
    templateUrl: 'main/account/account.tpl.html',
    controller: 'AccountCtrl'
  });
})

.controller('AccountCtrl', function($scope, User) {
  $scope.title = 'Account';
});

