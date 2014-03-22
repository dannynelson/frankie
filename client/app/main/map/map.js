angular.module('main.map', ['directives.map'])

.config(function($stateProvider) {
  $stateProvider.state('main.map', {
    url: '/map',
    templateUrl: 'main/map/map.tpl.html',
    controller: 'MapCtrl',
    resolve: {
      project: function(currentProject) {
        return currentProject.get();
      }
    }
  });
})

.controller('MapCtrl', function($scope, project) {
  debugger;
  $scope.address = project.address.street + ', ' + project.address.city + ', ' + project.address.zip
  $scope.leftButtons = [];
});
