angular.module('frankie.controllers')

.controller('NewProjectCtrl', function($scope, $rootScope, $stateParams, $ionicActionSheet, $location, ProjectService, currentProject) {
  
  // Get Data
  // ----------------------------
  // $stateParams.type is either 'new', or 'edit'
  $scope.project = currentProject.all();

  // Set Header
  // ----------------------------
  $scope.title = (function (type) {
    // capitalize first letter
    var newType = type.charAt(0).toUpperCase() + type.slice(1);
    return newType + ' Project';
  })($stateParams.type);

  $scope.leftButtons = [
    {
      type: 'button-clear button-assertive',
      content: 'Cancel',
      tap: function(e) {
        $rootScope.$viewHistory.backView.go();
      }
    }
  ];

  $scope.rightButtons = [
    {
      type: 'button-clear button-assertive',
      content: 'Save',
      tap: function(e) {
        $scope.save($scope.project);
      }
    }
  ];

  // Methods
  // ----------------------------
  $scope.save = function (project) {
    if ($stateParams.type === 'new') {
      ProjectService.add(project);
    } else if ($scope.mode === 'edit') {
      ProjectService.update(project);
    }
    currentProject.clear();
    $rootScope.$viewHistory.backView.go();
  };

  // Display action sheet to ask which type of photo to retrieve
  $scope.selectPhotoType = function() {
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
      cancel: function() {
      },

      // Called when one of the non-destructive buttons is clicked, with
      // the index of the button that was clicked. Return
      // "true" to tell the action sheet to close. Return false to not close.
      buttonClicked: function(index) {
        if (index === 0) {
          $scope.getPhoto('CAMERA');
        } else {
          $scope.getPhoto('PHOTOLIBRARY');
        }
        return true;
      },

      // Called when the destructive button is clicked. Return true to close the
      // action sheet. False to keep it open

    });
};


  // source type is either 'CAMERA' or 'PHOTOLIBRARY'
  $scope.getPhoto = function(sourceType) {

    navigator.camera.getPicture(onSuccess, onFail, {
      quality: 20,
      sourceType : Camera.PictureSourceType[sourceType],
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 200,
      targetHeight: 150
    });
    function onSuccess(imageData) {
      $scope.$apply(function () {
        $scope.project.photo = "data:image/jpeg;base64," + imageData;
      });
    }
    function onFail(message) {
      alert('Failed because: ' + message);
    }
  };
});