angular.module('main.map', ['directives.map'])

.config(function($stateProvider) {
  $stateProvider.state('main.map', {
    url: '/map',
    templateUrl: 'main/map/map.tpl.html',
    controller: 'MapCtrl'
  });
})

.controller('MapCtrl', function($scope) {
  $scope.leftButtons = [];
});


