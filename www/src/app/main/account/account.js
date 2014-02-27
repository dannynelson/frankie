angular.module('frankie.main.account', ['frankie.main'])

.config(function($stateProvider) {
  $stateProvider.state('main.account', {
    url: '/account',
    templateUrl: 'main/account/account.tpl.html',
    controller: 'AccountCtrl'
  });
})

.controller('AccountCtrl', function($scope, user) {

  // Header
  // -------------------------------
  $scope.title = 'Account';
  $scope.leftButtons = [
    {
      type: 'button-icon button-clear button-assertive',
      content: '<i class="icon ion-navicon"></i>',
      tap: function(e) {
        $scope.sideMenuController.toggleLeft();
      }
    }
  ];
  $scope.rightButtons = [];

});


