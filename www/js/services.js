angular.module('frankie.services')

/**
 * A simple example service that returns some data.
 */
.factory('ProjectService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var projects = [
    {
      id: 0,
      title: '1416 Bathroom Remodel',
      price: 500,
      notes: '10x10 bathroom, there is a leak in the ceiling.',
      start: '2014-01-15',
      end: '2014-02-15',
      client_id: 1,
      user_id: 1,
      photoURL:'http://files.parse.com/758426d3-6cd9-483a-91c7-96baf4137c16/6135dce2-752a-4fb8-ab31-95801752ddb5-photo.jpg'
    },
    {
      id: 1,
      title: 'Kitchen Repair',
      price: 1500,
      notes: '10x10 bathroom, there is a leak in the ceiling.',
      start: '2014-01-15',
      end: '2014-02-15',
      client_id: 1,
      user_id: 1,
      photoURL:'http://files.parse.com/758426d3-6cd9-483a-91c7-96baf4137c16/6135dce2-752a-4fb8-ab31-95801752ddb5-photo.jpg'
    },
    {
      id: 2,
      title: 'Replace Cabinets',
      price: 350,
      notes: '10x10 bathroom, there is a leak in the ceiling.',
      start: '2014-01-15',
      end: '2014-02-15',
      client_id: 1,
      user_id: 1,
      photoURL:'http://files.parse.com/758426d3-6cd9-483a-91c7-96baf4137c16/6135dce2-752a-4fb8-ab31-95801752ddb5-photo.jpg'
    }
  ];

  return {
    all: function() {
      return projects;
    },
    get: function(projectId) {
      // Simple index lookup
      return projects[projectId];
    },
    save: function(newProject) {
      newProject.id = projects.length;
      projects.push(newProject);
    },
    update: function(newProject) {
      // test if project exists
      for (var i = 0; i < projects.length; i++) {
        if (project.id === newProject.id) {
          project = newProject;
          return;
        }
      }
    }
  };
})

.factory('CurrentProjectService', function() {
  var project = {};

  return {
    set: function (key, value) {
      project[key] = value;
    },
    get: function (key) {
      return project[key];
    },
    all: function () {
      // Simple index lookup
      return project;
    },
    clear: function() {
      project = {};
    }
  };
})

.factory('ClientService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var clients = [
    {
      id: 0,
      first: 'Ryan',
      last: 'Stellar',
      location: 'San Francisco, CA'
    },
    {
      id: 1,
      first: 'Danny',
      last: 'Nelson',
      location: 'San Francisco, CA'
    },
    {
      id: 2,
      first: 'Ryan',
      last: 'Yee',
      location: 'San Francisco, CA'
    }
  ];

  return {
    all: function() {
      return clients;
    },
    get: function(clientId) {
      // Simple index lookup
      return clients[clientId];
    }
  };
});
