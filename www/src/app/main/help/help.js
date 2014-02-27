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

});


