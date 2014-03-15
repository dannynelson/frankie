angular.module('main.projectDetail', ['filters.moment', 'resources.currentProject', 'resources.projects'])

.config(function($stateProvider) {
  $stateProvider.state('main.projectDetail', {
    url: '/projects/:id',
    templateUrl: 'main/project-detail/project-detail.tpl.html',
    controller: 'ProjectDetailCtrl',
    resolve: {
      project: function (Projects, $stateParams, currentProject) {
        var project = Projects.get($stateParams.id);
        currentProject.create(project);
        return project;
      }
    }
  });
})

.controller('ProjectDetailCtrl', function($scope, $location, $rootScope, project, currentProject) {
  $scope.project = project;

  // Header
  // -------------------------------
  $scope.title = $scope.project.title;
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
    debugger;
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

  $scope.completeProject = function (project) {
    // save project to archives
    project.completed = true;
    // delete project by ID from collection
    $rootScope.$viewHistory.backView.go();
  };

});
