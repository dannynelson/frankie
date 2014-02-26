angular.module('frankie.controllers')

.controller('NewProjectCtrl', function($scope, $rootScope, $stateParams, $ionicActionSheet, $location, projects, currentProject, photo) {
  
  // Get Data
  // ----------------------------
  // $stateParams.type is either 'new', or 'edit'
  $scope.project = currentProject.all();

  // Header
  // ----------------------------
  $scope.title = (function (type) {
    // capitalize first letter
    var newType = type.charAt(0).toUpperCase() + type.slice(1);
    return newType + ' Project';
  })($stateParams.type);

  $scope.leftButtons = [
    {
      type: 'button-clear button-assertive',
      content: 'Cancel',
      tap: function(e) {
        $rootScope.$viewHistory.backView.go();
      }
    }
  ];

  $scope.rightButtons = [
    {
      type: 'button-clear button-assertive',
      content: 'Save',
      tap: function(e) {
        $scope.save($scope.project);
      }
    }
  ];

  // Methods
  // ----------------------------
  // save current project to projects collection
  // clear currentProject 
  // go back to previous view
  $scope.save = function (project) {
    if ($stateParams.type === 'new') {
      projects.add(project);
    } else if ($scope.mode === 'edit') {
      projects.update(project);
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