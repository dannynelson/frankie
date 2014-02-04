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
      description: '10x10 bathroom, there is a leak in the ceiling.'
    },
    {
      id: 1,
      title: 'Kitchen Repair',
      price: 1500,
      description: '10x10 bathroom, there is a leak in the ceiling.'
    },
    {
      id: 2,
      title: 'Replace Cabinets',
      price: 350,
      description: '10x10 bathroom, there is a leak in the ceiling.'
    }
  ];

  return {
    all: function() {
      return projects;
    },
    get: function(projectId) {
      // Simple index lookup
      return projects[projectId];
    }
  };
});
