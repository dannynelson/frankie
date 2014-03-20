angular.module('main.changePassword', ['resources.User'])

.config(function($stateProvider) {
  $stateProvider.state('main.changePassword', {
    url: '/change-password',
    templateUrl: 'main/change-password/change-password.tpl.html',
    controller: 'ChangePasswordCtrl'
  });
})

.controller('ChangePasswordCtrl', function($scope, User) {
  $scope.leftButtons = [];
  $scope.rightButtons = [];
});
