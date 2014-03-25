angular.module('main.projects.projectDetail', [
  'filters.moment',
  'services.currentProject',
  'services.currentUser',
  'services.projects'
])

.config(function($stateProvider) {
  $stateProvider.state('main.projects.projectDetail', {
    url: '/project-detail/:id',
    templateUrl: 'main/projects/project-detail/project-detail.tpl.html',
    controller: 'ProjectDetailCtrl',
    resolve: {
      project: function($stateParams, projects) {
        return projects.find($stateParams.id);
      },
      user: function(currentUser) {
        return currentUser.get();
      }
    }
  });
})

.controller('ProjectDetailCtrl', function($scope, $window, $rootScope, $state, projects, project, user, currentProject) {
  $scope.project = project;
  currentProject.set(project);

  // Header
  // -------------------------------
  $scope.title = project.title;
  $scope.leftButtons = [];
  $scope.rightButtons = [{
    type: 'button-clear button-assertive',
    content: '<button>edit</button>',
    tap: function(e) {
      $state.go('^.newProject', {type:'edit'});
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
    $window.open(method + ':' + address);
  };

  $scope.openAddressInMap = function() {
    var formattedAddress = [
      project.address.street || '',
      project.address.city || '',
      project.address.zip || '',
    ].join(' ');
    formattedAddress = encodeURIComponent(formattedAddress);
    $window.open('geo:0,0?q=' + formattedAddress);
  };

  $scope.completeProject = function(project) {
    var method = project.completed ? 'unarchive' : 'archive';
    projects[method](project, function() {
      $rootScope.$viewHistory.backView.go();
    });
  };
});
