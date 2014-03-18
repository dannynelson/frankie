angular.module('main.projectDetail', ['filters.moment', 'services.currentProject', 'services.projects'])

.config(function($stateProvider) {
  $stateProvider.state('main.projectDetail', {
    url: '/projects/:id',
    templateUrl: 'main/project-detail/project-detail.tpl.html',
    controller: 'ProjectDetailCtrl',
    resolve: {
      projectData: function (projects) {
        return projects.all();
      }
    }
  });
})

.controller('ProjectDetailCtrl', function($scope, $stateParams, $rootScope, $location, projectData, currentProject) {
  debugger;
  $scope.project = projectData.get($stateParams.id);
  currentProject.create($scope.project);

  // Header
  // -------------------------------
  $scope.title = $scope.project.get('title');
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
