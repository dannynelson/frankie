angular.module('frankie.services')

.factory('projects', function() {
  // Some fake testing data
  var projects = [
    {
      id: 0,
      title: '1416 Bathroom Remodel',
      price: 500,
      notes: '10x10 bathroom, there is a leak in the ceiling.',
      start: '2014-01-15',
      end: '2014-02-15',
      client: {
        first: 'joe',
        last: 'schmoe',
        phone: 8583374505,
        email: 'danielnelsonguitar@gmail.com'
      },
      timeline: [
        {
          title: 'milestone 1',
          date: '',
        },
        {
          title: 'milestone 2',
          date: '',
        }
      ],
      user_id: 1,
      photo:'http://files.parse.com/758426d3-6cd9-483a-91c7-96baf4137c16/6135dce2-752a-4fb8-ab31-95801752ddb5-photo.jpg'
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
      photo:'http://files.parse.com/758426d3-6cd9-483a-91c7-96baf4137c16/6135dce2-752a-4fb8-ab31-95801752ddb5-photo.jpg'
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
      photo:'http://files.parse.com/758426d3-6cd9-483a-91c7-96baf4137c16/6135dce2-752a-4fb8-ab31-95801752ddb5-photo.jpg'
    }
  ];

  return {
    all: function () {
      return projects;
    },
    add: function (project) {
      // Test to see if project exists
      project.id = projects.length;
      projects.push(project);
    },
    update: function (project) {
      // Search through projects, and replace one with matching ID
      for (var i = 0; i < projects.length; i++) {
        if (project.id = projects[i].id) {
          projects[i] = project;
          return;
        }
      }
    },
    get: function (projectId) {
      // Simple index lookup
      return projects[projectId];
    },
    save: function (newProject) {
      newProject.id = projects.length;
      projects.push(newProject);
    },
    update: function (newProject) {
      // test if project exists
      for (var i = 0; i < projects.length; i++) {
        if (project.id === newProject.id) {
          project = newProject;
          return;
        }
      }
    }
  };
});