angular.module('frankie.services')

.factory('archives', function() {
  var archives = [];

  return {
    all: function () {
      return archives;
    },
    add: function (project) {
      // Test to see if project exists
      archives.push(project);
    },
    // update: function (project) {
    //   // Search through archives, and replace one with matching ID
    //   for (var i = 0; i < archives.length; i++) {
    //     if (project.id = archives[i].id) {
    //       archives[i] = project;
    //       return;
    //     }
    //   }
    // },
    // get: function (projectId) {
    //   // Simple index lookup
    //   return archives[projectId];
    // },
    // save: function (newProject) {
    //   newProject.id = archives.length;
    //   archives.push(newProject);
    // },
    // update: function (newProject) {
    //   // test if project exists
    //   for (var i = 0; i < archives.length; i++) {
    //     if (project.id === newProject.id) {
    //       project = newProject;
    //       return;
    //     }
    //   }
    // }
  };
});