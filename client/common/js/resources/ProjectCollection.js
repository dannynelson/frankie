angular.module('resources.ProjectCollection', ['resources.Project'])

.factory('ProjectCollection', function($q, Project) {
  
  return Parse.Collection.extend({
    model: Project
  });

  // Construct a query to get the current user's todo items
  // var projects = new ProjectCollection();
  // var query = new Parse.Query(Project);
  // query.equalTo("user", Parse.User.current());
  // projects.query = query;
  // projects.fetch();

  // initial query
  // projectQuery.find({
  //   success: function(retrievedProjects) {
  //     projects = retrievedProjects;
  //   },
  //   error: function(error) {
  //     alert("Error: " + error.code + " " + error.message);
  //   }
  // });

  // var findAll = function(column, value) {
  //   var d = $q.defer();
  //   projectQuery.equalTo(column, value);
  //   projectQuery.find({
  //     success: function(retrievedProjects) {
  //       projects = retrievedProjects;
  //       d.resolve(projects);
  //     },
  //     error: function(error) {
  //       alert("Error: " + error.code + " " + error.message);
  //       d.reject(error);
  //     }
  //   });
  //   return d.promise;
  // };
  // var getById = function(id) {
  //   var d = $q.defer();
  //   projectQuery.get(id, {
  //     success: function(project) {
  //       d.resolve(project);
  //     },
  //     error: function(error) {
  //       alert("Error: " + error.code + " " + error.message);
  //       d.reject(error);
  //     }
  //   });
  //   return d.promise;
  // };
  // projects saved so that we don't need to constantly reload

  // return {
  //   getProjects: function() {
  //     return projects.filter(function(project) {
  //       return project.get('completed') === false;
  //     });
  //   },

  //   getArchives: function() {
  //     return projects.filter(function(project) {
  //       return project.get('completed') === true;
  //     });
  //   },

  //   // select by index from current projects
  //   getProjectByIndex: function(i) {
  //     return projects[i];
  //   }

  // };


  // var projects = [
  //   {
  //     id: 0,
  //     title: 'Sallys Bathroom Remodel',
  //     price: 500,
  //     notes: '10x10 bathroom, there is a leak in the ceiling. Client is leaving on vacation Sept. 3.',
  //     start: '2014-01-15',
  //     end: '2014-02-15',
  //     client: {
  //       first: 'joe',
  //       last: 'schmoe',
  //       phone: 8583374505,
  //       email: 'danielnelsonguitar@gmail.com'
  //     },
  //     address: {
  //       street: '12687 Gibraltar Dr.',
  //       city: 'San Diego',
  //       zip: '92128'
  //     },
  //     timeline: [
  //       {
  //         title: 'Remove Wallpaper',
  //         date: '2014-2-10'
  //       },
  //       {
  //         title: 'Install New Toilets',
  //         date: '2014-2-15'
  //       }
  //     ],
  //     user_id: 1,
  //     completed: false,
  //     completedDate: null,
  //     photo:'http://files.parse.com/758426d3-6cd9-483a-91c7-96baf4137c16/6135dce2-752a-4fb8-ab31-95801752ddb5-photo.jpg'
  //   },
  //   {
  //     id: 1,
  //     title: 'Johnson Kitchen Repair',
  //     price: 1500,
  //     notes: '10x10 bathroom, there is a leak in the ceiling. Client is leaving on vacation Sept. 3.',
  //     start: '2014-01-15',
  //     end: '2014-02-15',
  //     client: {
  //       first: 'joe',
  //       last: 'schmoe',
  //       phone: 8583374505,
  //       email: 'danielnelsonguitar@gmail.com'
  //     },
  //     address: {
  //       street: '12687 Gibraltar Dr.',
  //       city: 'San Diego',
  //       zip: '92128'
  //     },
  //     timeline: [
  //       {
  //         title: 'Select new kitchen tiles',
  //         date: '2014-2-25'
  //       },
  //       {
  //         title: 'Replace cabinets',
  //         date: '2014-2-30'
  //       }
  //     ],
  //     user_id: 1,
  //     completed: false,
  //     completedDate: null,
  //     photo:'http://files.parse.com/758426d3-6cd9-483a-91c7-96baf4137c16/6135dce2-752a-4fb8-ab31-95801752ddb5-photo.jpg'
  //   },
  //   {
  //     id: 2,
  //     title: 'Davids counter retile',
  //     price: 350,
  //     notes: '10x10 bathroom, there is a leak in the ceiling.',
  //     start: '2014-03-15',
  //     end: '2014-04-15',
  //     client: {
  //       first: 'joe',
  //       last: 'schmoe',
  //       phone: 8583374505,
  //       email: 'danielnelsonguitar@gmail.com'
  //     },
  //     address: {},
  //     timeline: [
  //       {
  //         title: 'Take client to select tile colors',
  //         date: '2014-1-29'
  //       },
  //       {
  //         title: 'Remove old kitchen tiles',
  //         date: '2014-2-12'
  //       }
  //     ],
  //     user_id: 1,
  //     completed: false,
  //     completedDate: null,
  //     photo:'http://files.parse.com/758426d3-6cd9-483a-91c7-96baf4137c16/6135dce2-752a-4fb8-ab31-95801752ddb5-photo.jpg'
  //   }
  // ];

  // return {
  //   all: function () {
  //     return projects;
  //   },
  //   filter: function(key, value) {
  //     return projects.filter(function(project) {
  //       return project[key] === value;
  //     });
  //   },
  //   archives: function () {
  //     return projects;
  //   },
  //   add: function (project) {
  //     // Test to see if project exists
  //     project.id = projects.length;
  //     projects.push(project);
  //   },
  //   update: function (project) {
  //     // Search through projects, and replace one with matching ID
  //     for (var i = 0; i < projects.length; i++) {
  //       if (project.id === projects[i].id) {
  //         projects[i] = project;
  //         return;
  //       }
  //     }
  //   },
  //   get: function (projectId) {
  //     // Simple index lookup
  //     return projects[projectId];
  //   },
  //   save: function (newProject) {
  //     newProject.id = projects.length;
  //     projects.push(newProject);
  //   },
  //   remove: function (projectId) {
  //     for (var i = 0; i < projects.length; i++) {
  //       if (projectId === projects[i].id) {
  //         projects.splice(i, 1);
  //       }
  //     }
  //   }
  // };
});
