angular.module('main.newProfile', ['resources.User', 'filters.phone', 'services.photo'])

.config(function($stateProvider) {
  $stateProvider.state('main.newProfile', {
    url: '/new-profile',
    templateUrl: 'main/new-profile/new-profile.tpl.html',
    controller: 'NewProfileCtrl',
    resolve: {
      user: function(User) {
        return User.get();
      }
    }
  });
})

.controller('NewProfileCtrl', function($scope, user, photo) {
  $scope.leftButtons = [];
  $scope.rightButtons = [];
  $scope.user = user;

  // save current project to Projects collection
  // clear currentProject 
  // go back to previous view
  // $scope.save = function (project) {
  //   if ($stateParams.type === 'new') {
  //     Projects.add(project);
  //   } else if ($scope.mode === 'edit') {
  //     Projects.update(project);
  //   }
  //   currentProject.clear();
  //   $rootScope.$viewHistory.backView.go();
  // };

  $scope.getPhoto = function () {
    photo.get(function (imageData) {
      $scope.$apply(function () {
        $scope.project.photo = "data:image/jpeg;base64," + imageData;
      });
    });
  };
});
