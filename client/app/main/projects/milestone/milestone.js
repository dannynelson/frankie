// angular.module('main.milestone', ['filters.moment', 'services.currentProject', 'services.projects'])

// .config(function($stateProvider) {
//   $stateProvider.state('main.milestone', {
//     url: '/projects/:id',
//     templateUrl: 'main/project-detail/project-detail.tpl.html',
//     controller: 'ProjectDetailCtrl',
//     resolve: {
//       project: function($stateParams, projects) {
//         return projects.find($stateParams.id);
//       }
//     }
//   });
// })

// .controller('ProjectDetailCtrl', function($scope, $rootScope, $location, projects, project, currentProject) {
//   debugger;
//   $scope.project = project;
//   currentProject.set(project);

//   // Header
//   // -------------------------------
//   $scope.title = project.title;
//   $scope.leftButtons = [];
//   $scope.rightButtons = [{
//     type: 'button-clear button-assertive',
//     content: '<button>edit</button>',
//     tap: function(e) {
//       $location.url('/main/new-project/edit');
//     }
//   }];

//   // Listeners
//   // -------------------------------
//   // clear currentProject when back button pressed
//   $scope.$on('back', function(event) {
//     currentProject.clear();
//   });

//   // Methods
//   // -------------------------------
//   // go to url to open contact application
//   // method is tel, sms, or mailto
//   // address is address to be contacted
//   $scope.contact = function (method, address) {
//     window.location.href = method + ':' + address;
//   };

//   $scope.completeProject = function(project) {
//     projects.archive(project, function() {
//       $rootScope.$viewHistory.backView.go();
//     });
//   };
// });
