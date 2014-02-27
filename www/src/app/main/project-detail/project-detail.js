angular.module('frankie.main.projectDetail', ['frankie.main', 'filters.moment', 'resources.currentProject'])

.config(function($stateProvider) {
  $stateProvider.state('main.projectDetail', {
    url: '/projects/:id',
    templateUrl: 'main/project-detail/project-detail.tpl.html',
    controller: 'ProjectDetailCtrl'
  });
})

.controller('ProjectDetailCtrl', function($scope, $stateParams, $location, $rootScope, currentProject, projects, archives) {
  
  // Get Data
  // -------------------------------
  $scope.project = projects.get($stateParams.id);
  // set currentProject, so that related views can reference the same object
  currentProject.create($scope.project);

  // Header
  // -------------------------------
  $scope.title = $scope.project.title;
  $scope.leftButtons = [];
  $scope.rightButtons = [
    {
      type: 'button-clear button-assertive',
      content: '<button>edit</button>',
      tap: function(e) {
        $location.url('/main/new-project/edit');
      }
    }
  ];

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

  $scope.completeProject = function (project) {
    // save project to archives
    project.completed = true;
    archives.add(project);
    // delete project by ID from collection
    projects.remove(project.id);
    $rootScope.$viewHistory.backView.go();
  };

});