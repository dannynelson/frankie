// TODO: create a separate state for this not in main
angular.module('main.newProject', ['services.photo', 'services.loading', 'services.loading', 'services.currentProject'])

.config(function($stateProvider) {
  $stateProvider.state('main.newProject', {
    // add type to specify edit/new
    url: '/new-project/:type',
    templateUrl: 'main/new-project/new-project.tpl.html',
    controller: 'NewProjectCtrl',
  });
})

.controller('NewProjectCtrl', function($scope, $rootScope, $stateParams, currentProject, projects, photo) {
  // $stateParams.type is either 'new', or 'edit'
  // if it is edit, current project defined in project detail view
  debugger;
  $scope.project = currentProject.get();

  $scope.title = (function (type) {
    var newType = type.charAt(0).toUpperCase() + type.slice(1);
    return newType + ' Project';
  })($stateParams.type);

  $scope.leftButtons = [{
    type: 'button-clear button-assertive',
    content: 'Cancel',
    tap: function(e) {
      $scope.returnToProjects();
    }
  }];

  $scope.rightButtons = [{
    type: 'button-clear button-assertive',
    content: 'Save',
    tap: function(e) {
      $scope.save($scope.project);
    }
  }];

  $scope.$on('back', function() {
    currentProject.reset();
  });

  $scope.returnToProjects = function() {
    currentProject.reset();
    $rootScope.$viewHistory.backView.go();
  };

  $scope.save = function (project) {
    var method = $stateParams.type === 'new' ? 'add' : 'update';
    projects[method](project, function() {
      $scope.returnToProjects();
    });
  };

  $scope.getPhoto = function () {
    $scope.newPhoto = true;
    photo.get(function (imageData) {
      $scope.$apply(function () {
        $scope.project.photo = "data:image/jpeg;base64," + imageData;
      });
    });
  };
});
