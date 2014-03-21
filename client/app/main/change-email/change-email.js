angular.module('main.changeEmail', [
  'services.currentUser',
  'services.emailValidation'
])

.config(function($stateProvider) {
  $stateProvider.state('main.changeEmail', {
    url: '/change-email',
    templateUrl: 'main/change-email/change-email.tpl.html',
    controller: 'ChangeEmailCtrl'
  });
})

.controller('ChangeEmailCtrl', function($scope, $rootScope, emailValidation, currentUser) {
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
