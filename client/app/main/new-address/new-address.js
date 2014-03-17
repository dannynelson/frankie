angular.module('main.newAddress', ['services.currentProject'])

.config(function($stateProvider) {
  $stateProvider.state('main.newAddress', {
    url: '/new-address',
    templateUrl: 'main/new-address/new-address.tpl.html',
    controller: 'NewAdressCtrl',
    resolve: {
      address: function(currentProject) {
        return currentProject.get('address');
      }
    }
  });
})

.controller('NewAdressCtrl', function($scope, address) {
  $scope.address = address;

  $scope.title = 'Address';
  $scope.leftButtons = [];
  $scope.rightButtons = [];
});
