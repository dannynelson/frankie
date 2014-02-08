angular.module('frankie.services')

/**
 * A simple example service that returns some data.
 */

.factory('currentDate', function() {
  // generate current date
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  today = yyyy+'-'+mm+'-'+dd;
  return today;
})

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
    add: function(project) {
      // Simple index lookup
      project.id = projects.length;
      projects.push(project);
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

.factory('currentProject', function(currentDate) {
  
  var makeProject = function () {
    return {
      start: currentDate,
      end: currentDate,
      timeline: [],
      client: {}
    };
  };

  var project = makeProject();

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
    create: function(projectJSON) {
      project = projectJSON;
    },
    clear: function() {
      project = makeProject();
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
