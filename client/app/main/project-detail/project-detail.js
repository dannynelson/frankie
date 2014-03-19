angular.module('main.projectDetail', ['filters.moment', 'services.currentProject', 'resources.Project'])

.config(function($stateProvider) {
  $stateProvider.state('main.projectDetail', {
    url: '/projects/:id',
    templateUrl: 'main/project-detail/project-detail.tpl.html',
    controller: 'ProjectDetailCtrl',
    resolve: {
      project: function(Project, $stateParams) {
        return Project.get({objectId: $stateParams.id});
      }
    }
  });
})

.controller('ProjectDetailCtrl', function($scope, $stateParams, $rootScope, $location, project, currentProject) {
  debugger;
  $scope.project = project;
  currentProject.set(project);
  // debugger;
  // Project.get({objectId: $stateParams.id}, function(project) {
  //   $scope.project = project;
  //   debugger;
  // });

  // Header
  // -------------------------------
  $scope.title = project.title;
  $scope.leftButtons = [];
  $scope.rightButtons = [{
    type: 'button-clear button-assertive',
    content: '<button>edit</button>',
    tap: function(e) {
      $location.url('/main/new-project/edit');
    }
  }];

  // Listeners
  // -------------------------------
  // clear currentProject when back button pressed
  $scope.$on('back', function(event) {
    currentProject.clear();
  });

  // Methods
  // -------------------------------
  // go to url to open contact application
  // method is tel, sms, or mailto
  // address is address to be contacted
  $scope.contact = function (method, address) {
    window.location.href = method + ':' + address;
  };

  $scope.completeProject = function(project) {
    project.completed = true;
    $rootScope.$viewHistory.backView.go();
  };

});
