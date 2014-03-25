angular.module('main.account.changeEmail', [
  'services.currentUser',
  'services.emailValidation'
])

.config(function($stateProvider) {
  $stateProvider.state('main.account.changeEmail', {
    url: '/change-email',
    templateUrl: 'main/account/change-email/change-email.tpl.html',
    controller: 'ChangeEmailCtrl'
  });
})

.controller('ChangeEmailCtrl', function($scope, $rootScope, emailValidation, currentUser) {
  debugger;
  $scope.leftButtons = [];
  $scope.rightButtons = [];
  $scope.save = function(oldUsername, newUsername) {
    if (!emailValidation(newUsername) || !emailValidation(oldUsername)) {
      alert('Invalid email address!');
    } else {
      var user = currentUser.get();
      user.username = user.email = newUsername;
      currentUser.save(function() {
        $rootScope.$viewHistory.backView.go();
      });
    }
  };
});
