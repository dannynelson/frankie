// TODO: create a separate state for this not in main
angular.module('main.newProject', ['services.photo', 'resources.currentProject'])

.config(function($stateProvider) {
  $stateProvider.state('main.newProject', {
    // add type to specify edit/new
    url: '/new-project/:type',
    templateUrl: 'main/new-project/new-project.tpl.html',
    controller: 'NewProjectCtrl'
  });
})

.controller('NewProjectCtrl', function($scope, $rootScope, $stateParams, Projects, currentProject, photo) {
  // $stateParams.type is either 'new', or 'edit'
  $scope.project = currentProject.all();

  $scope.title = (function (type) {
    // capitalize first letter
    var newType = type.charAt(0).toUpperCase() + type.slice(1);
    return newType + ' Project';
  })($stateParams.type);

  $scope.leftButtons = [{
    type: 'button-clear button-assertive',
    content: 'Cancel',
    tap: function(e) {
      $rootScope.$viewHistory.backView.go();
    }
  }];

  $scope.rightButtons = [{
    type: 'button-clear button-assertive',
    content: 'Save',
    tap: function(e) {
      $scope.save($scope.project);
    }
  }];

  // save current project to Projects collection
  // clear currentProject 
  // go back to previous view
  $scope.save = function (project) {
    if ($stateParams.type === 'new') {
      Projects.add(project);
    } else if ($scope.mode === 'edit') {
      Projects.update(project);
    }
    currentProject.clear();
    $rootScope.$viewHistory.backView.go();
  };

  $scope.getPhoto = function () {
    photo.get(function (imageData) {
      $scope.$apply(function () {
        $scope.project.photo = "data:image/jpeg;base64," + imageData;
      });
    });
  };
});
