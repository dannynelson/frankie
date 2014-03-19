angular.module('main.changeEmail', ['resources.User'])

.config(function($stateProvider) {
  $stateProvider.state('main.changeEmail', {
    url: '/change-email',
    templateUrl: 'main/change-email/change-email.tpl.html',
    controller: 'ChangeEmailCtrl'
  });
})

.controller('ChangeEmailCtrl', function($scope, User) {
  $scope.title = 'Change Email';
  $scope.leftButtons = [];
});
