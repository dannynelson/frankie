angular.module('main.change-email', ['resources.user'])

.config(function($stateProvider) {
  $stateProvider.state('main.change-email', {
    url: '/change-email',
    templateUrl: 'main/change-email/change-email.tpl.html',
    controller: 'ChangeEmailCtrl'
  });
})

.controller('ChangeEmailCtrl', function($scope, User) {
  $scope.title = 'Change Email';
  $scope.leftButtons = [];
});
