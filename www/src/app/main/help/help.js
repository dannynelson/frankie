angular.module('frankie.main.help', ['frankie.main'])

.config(function($stateProvider) {
  $stateProvider.state('main.help', {
    url: '/help',
    templateUrl: 'main/help/help.tpl.html',
    controller: 'HelpCtrl'
  });
})

.controller('HelpCtrl', function($scope) {

  // Header
  // -------------------------------
  $scope.title = 'Help';
  $scope.leftButtons = [{
    type: 'button-icon button-clear button-assertive',
    content: '<i class="icon ion-navicon"></i>',
    tap: function(e) {
      $scope.sideMenuController.toggleLeft();
    }
  }];
  $scope.rightButtons = [];

});


