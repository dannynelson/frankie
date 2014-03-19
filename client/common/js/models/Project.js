angular.module('models.Project', ['services.currentDate', 'models.Client', 'models.Timeline', 'models.User'])

.factory('Project', function($q, $rootScope, $resource, User, Client, Timeline, currentDate) {
  return $resource('https://api.parse.com/1/classes/Project/:objectId', null, {
    update: {method:'PUT'}
  });

  // var projects = Project.get(function() {
  //   debugger;
  // });

  // return projects;
  // var projects = [];
  // var Project = Restangular.all('Project');
  // debugger;
  // Project.get().then(function(results) {
  //   debugger;
  // });


  // var Project = Parse.Object.extend({
  //   className: 'Project',

  //   initialize: function() {
  //     this.user = User.current();
  //     this.setACL(new Parse.ACL(this.user));
  //     this.start = currentDate;
  //     this.end = currentDate;
  //     this.timeline = new Timeline();
  //     this.client = new Client();
  //   },

  //   defaults: {
  //     address: {},
  //     completed: false
  //   }
  // });

  // var fetchAll = function() {
  //   debugger;
  //   var defer = $q.defer();
  //   var query = new Parse.Query(Project);
  //   query.find({
  //     success: function(retrievedProjects) {
  //       fetched = true;
  //       projects = retrievedProjects;
  //       defer.resolve(projects);
  //       $rootScope.$broadcast('projectsUpdated');
  //     },
  //     error: function(error) {
  //       alert("Error: " + error.code + " " + error.message);
  //       defer.reject();
  //     }
  //   });
  //   return defer.promise;
  // };
  // fetchAll();

  // return {
  //   getProjects: function() {
  //     return projects;
  //     // return projects.filter(function(project) {
  //     //   return project.completed === false;
  //     // });
  //   },
  //   getArchives: function() {
  //     return projects.filter(function(project) {
  //       return project.completed === true;
  //     });
  //   },
  //   getByIndex: function(i) {
  //     return project[i];
  //   }
  // };
});
