angular.module('frankie.services')

.factory('projects', function() {
  // Some fake testing data
  var projects = [
    {
      id: 0,
      title: 'Sallys Bathroom Remodel',
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
          title: 'Remove Wallpaper',
          date: '2014-2-10',
        },
        {
          title: 'Install New Toilets',
          date: '2014-2-15',
        }
      ],
      user_id: 1,
      completed: false,
      photo:'http://files.parse.com/758426d3-6cd9-483a-91c7-96baf4137c16/6135dce2-752a-4fb8-ab31-95801752ddb5-photo.jpg'
    },
    {
      id: 1,
      title: 'Johnson Kitchen Repair',
      price: 1500,
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
          title: 'Select new kitchen tiles',
          date: '2014-2-25',
        },
        {
          title: 'Replace cabinets',
          date: '2014-2-30',
        }
      ],
      user_id: 1,
      completed: false,
      photo:'http://files.parse.com/758426d3-6cd9-483a-91c7-96baf4137c16/6135dce2-752a-4fb8-ab31-95801752ddb5-photo.jpg'
    },
    {
      id: 2,
      title: 'Davids counter retile',
      price: 350,
      notes: '10x10 bathroom, there is a leak in the ceiling.',
      start: '2014-03-15',
      end: '2014-04-15',
      client: {
        first: 'joe',
        last: 'schmoe',
        phone: 8583374505,
        email: 'danielnelsonguitar@gmail.com'
      },
      timeline: [
        {
          title: 'Take client to select tile colors',
          date: '2014-1-29',
        },
        {
          title: 'Remove old kitchen tiles',
          date: '2014-2-12',
        }
      ],
      user_id: 1,
      completed: false,
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
        if (project.id === projects[i].id) {
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
    remove: function (projectId) {
      for (var i = 0; i < projects.length; i++) {
        if (projectId === projects[i].id) {
          projects.splice(i, 1);
        }
      }
    }
  };
});