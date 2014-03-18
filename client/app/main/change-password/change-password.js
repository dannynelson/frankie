angular.module('main.changePassword', ['models.User'])

.config(function($stateProvider) {
  $stateProvider.state('main.changePassword', {
    url: '/change-password',
    templateUrl: 'main/change-password/change-password.tpl.html',
    controller: 'ChangePasswordCtrl'
  });
})

.controller('ChangePasswordCtrl', function($scope, User) {
  $scope.title = 'Change Password';
  $scope.leftButtons = [];
});
