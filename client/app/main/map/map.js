angular.module('main.map', [])

.config(function($stateProvider) {
  $stateProvider.state('main.map', {
    url: '/map',
    templateUrl: 'main/map/map.tpl.html',
    controller: 'MapCtrl'
  });
})

.controller('MapCtrl', function($scope) {
  $scope.title = 'Map';
});


