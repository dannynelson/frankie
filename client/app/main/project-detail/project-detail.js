angular.module('main.projectDetail', ['filters.moment', 'services.currentProject', 'services.currentUser', 'services.projects'])

.config(function($stateProvider) {
  $stateProvider.state('main.projectDetail', {
    url: '/projects/:id',
    templateUrl: 'main/project-detail/project-detail.tpl.html',
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

.controller('ProjectDetailCtrl', function($scope, $rootScope, $location, projects, project, user, currentProject) {
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

  $scope.createMapUrl = function() {
    var getAddress = function(addressObj) {
      return [
        addressObj.street || '',
        addressObj.city || '',
        addressObj.zip || '',
      ].join(' ');
    };
    var baseUrl = 'http://maps.google.com/maps?';
    // leaving start address blank starts directions from current location on mobile devices
    var startAddress = 'saddr=';
    var destAddress = 'daddr=' + getAddress(project.address);
    return baseUrl + startAddress + '&' + destAddress;
  };

  $scope.completeProject = function(project) {
    var method = project.completed ? 'unarchive' : 'archive';
    projects[method](project, function() {
      $rootScope.$viewHistory.backView.go();
    });
  };
});
