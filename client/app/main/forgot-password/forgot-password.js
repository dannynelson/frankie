angular.module('main.forgotPassword', ['services.auth'])

.config(function($stateProvider) {
  $stateProvider.state('main.forgotPassword', {
    url: "/forgot-password",
    templateUrl: 'templates/forgot-password.tpl.html',
    controller: 'ForgotPasswordCtrl'
  });
})

.controller('ForgotPasswordCtrl', function($scope, auth) {
  $scope.requestPasswordReset = auth.requestPasswordReset;
});
