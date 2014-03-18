angular.module('main.projectDetail', ['filters.moment', 'services.currentProject', 'models.Project'])

.config(function($stateProvider) {
  $stateProvider.state('main.projectDetail', {
    url: '/projects/:id',
    templateUrl: 'main/project-detail/project-detail.tpl.html',
    controller: 'ProjectDetailCtrl',
    resolve: {
      project: function(Project, $stateParams) {
        return Project.getByIndex($stateParams.id);
      }
    }
  });
})

.controller('ProjectDetailCtrl', function($scope, $rootScope, $location, project, currentProject) {
  currentProject.create(project);
  $scope.project = project.attributes;

  // Header
  // -------------------------------
  $scope.title = project.get('title');
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
