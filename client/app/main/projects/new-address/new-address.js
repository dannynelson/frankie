angular.module('main.projects.newAddress', ['services.currentProject'])

.config(function($stateProvider) {
  $stateProvider.state('main.projects.newAddress', {
    url: '/new-address',
    templateUrl: 'main/projects/new-address/new-address.tpl.html',
    controller: 'NewAdressCtrl',
    resolve: {
      address: function(currentProject) {
        return currentProject.get().address;
      }
    }
  });
})

.controller('NewAdressCtrl', function($scope, address) {
  $scope.address = address;

  $scope.leftButtons = [];
  $scope.rightButtons = [];
});
