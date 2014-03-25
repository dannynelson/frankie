angular.module('main.projects.newClient', [
  'services.currentProject',
  'services.currentDate'
])

.config(function($stateProvider) {
  $stateProvider.state('main.projects.newClient', {
    url: '/new-client',
    templateUrl: 'main/projects/new-client/new-client.tpl.html',
    controller: 'NewClientCtrl',
    resolve: {
      client: function (currentProject) {
        return currentProject.get().client;
      }
    }
  });
})

.controller('NewClientCtrl', function($scope, $location, client, currentDate) {
  $scope.client = client;

  $scope.leftButtons = [];
  $scope.rightButtons = [];
});
