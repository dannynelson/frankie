angular.module('landing.forgotPassword', ['services.auth'])

.config(function($stateProvider) {
  $stateProvider.state('landing.forgotPassword', {
    url: "/forgot-password",
    templateUrl: 'landing/forgot-password/forgot-password.tpl.html',
    controller: 'ForgotPasswordCtrl'
  });
})

.controller('ForgotPasswordCtrl', function($scope, auth) {
  $scope.requestPasswordReset = auth.requestPasswordReset;
});
