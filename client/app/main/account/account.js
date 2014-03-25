angular.module('main.account', [
  'main.account.changeEmail',
  'main.account.forgotPassword',
  'main.account.index',
  'main.account.newProfile',
  'main.account.profile',

  'services.currentUser'
])

.config(function($stateProvider) {
  $stateProvider.state('main.account', {
    url: '/account',
    templateUrl: 'templates/animation-view.tpl.html',
    controller: 'AccountCtrl'
  });
})

.controller('AccountCtrl', function() {
});
