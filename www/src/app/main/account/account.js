angular.module('frankie.main.account', ['frankie.main', 'resources.user'])

.config(function($stateProvider) {
  $stateProvider.state('main.account', {
    url: '/account',
    templateUrl: 'main/account/account.tpl.html',
    controller: 'AccountCtrl'
  });
})

.controller('AccountCtrl', function($scope, User) {

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


