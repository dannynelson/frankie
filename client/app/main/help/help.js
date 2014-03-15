angular.module('main.help', [])

.config(function($stateProvider) {
  $stateProvider.state('main.help', {
    url: '/help',
    templateUrl: 'main/help/help.tpl.html',
    controller: 'HelpCtrl'
  });
})

.controller('HelpCtrl', function($scope) {
  $scope.title = 'Help';
});


