angular.module('main.newClient', ['resources.currentProject', 'services.currentDate'])

.config(function($stateProvider) {
  $stateProvider.state('main.newClient', {
    url: '/new-client',
    templateUrl: 'main/new-client/new-client.tpl.html',
    controller: 'NewClientCtrl',
    resolve: {
      client: function (currentProject) {
        return currentProject.get('client');
      }
    }
  });
})

.controller('NewClientCtrl', function($scope, $location, client, currentDate) {
  $scope.client = client;

  $scope.title = 'Client Info';
  $scope.leftButtons = [];
  $scope.rightButtons = [];
});
