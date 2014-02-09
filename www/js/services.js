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

.factory('photo', function($ionicActionSheet) {
  
  // Get photo from library, or take a photo
  // source type is either 'CAMERA' or 'PHOTOLIBRARY'
  var getPhoto = function (sourceType, onSuccess) {
    
    var onFail = function (message) {
      alert('Failed because: ' + message);
    };

    navigator.camera.getPicture(onSuccess, onFail, {
      quality: 20,
      sourceType : Camera.PictureSourceType[sourceType],
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 200,
      targetHeight: 150
    });
    // function onSuccess(imageData) {
    //   $scope.$apply(function () {
    //     $scope.project.photo = "data:image/jpeg;base64," + imageData;
    //   });
    // }

  };

  // Display action sheet to ask which type of photo to retrieve
  var selectPhotoType = function (onSuccess) {
    $ionicActionSheet.show({
      // The various non-destructive button choices
      buttons: [
        { text: 'Take Photo' },
        { text: 'Choose Existing' },
      ],

      // The text of the cancel button
      cancelText: 'Cancel',

      // Called when the sheet is cancelled, either from triggering the
      // cancel button, or tapping the backdrop, or using escape on the keyboard
      cancel: function() {},

      // Called when one of the non-destructive buttons is clicked, with
      // the index of the button that was clicked. Return
      // "true" to tell the action sheet to close. Return false to not close.
      buttonClicked: function(index) {
        if (index === 0) {
          getPhoto('CAMERA', onSuccess);
        } else {
          getPhoto('PHOTOLIBRARY', onSuccess);
        }
        return true;
      },
    });
  };

  return {
    get: selectPhotoType
  };
})

// TODO: figure out a way to only inject moment here
.factory('moment', function() {

  // converts to time from new, e.g. in a month
  // date is YYYY-MM-DD
  var fromNow = function(date) {
    return moment(date, "YYYY-MM-DD").fromNow();
  };

  // converts date to just month and day
  // date is YYYY-MM-DD
  var format = function(date) {
    return moment(date).format("MMM Do");
  };

  return {
    fromNow: fromNow,
    format: format
  };

});
  
// .factory('ClientService', function() {

//   // Some fake testing data
//   var clients = [
//     {
//       id: 0,
//       first: 'Ryan',
//       last: 'Stellar',
//       location: 'San Francisco, CA'
//     },
//     {
//       id: 1,
//       first: 'Danny',
//       last: 'Nelson',
//       location: 'San Francisco, CA'
//     },
//     {
//       id: 2,
//       first: 'Ryan',
//       last: 'Yee',
//       location: 'San Francisco, CA'
//     }
//   ];

//   return {
//     all: function() {
//       return clients;
//     },
//     get: function(clientId) {
//       // Simple index lookup
//       return clients[clientId];
//     }
//   };
// });
