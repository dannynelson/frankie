/**
 * A service for sharing the currentProject across multiple scopes
 */

angular.module('services.photo', [])

.factory('photo', function($ionicActionSheet) {
  
  // Get photo from library, or take a photo
  // source type is either 'CAMERA' or 'PHOTOLIBRARY'
  var getPhoto = function (sourceType, onSuccess) {
    var onFail = function (message) {
      alert('Failed because: ' + message);
    };
    var photoOptions = {
      quality: 20,
      sourceType : Camera.PictureSourceType[sourceType],
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 200,
      targetHeight: 150
    };
    navigator.camera.getPicture(onSuccess, onFail, photoOptions);
  };

  // Display action sheet to ask which type of photo to retrieve
  var selectPhotoType = function (onSuccess) {
    $ionicActionSheet.show({
      // The various non-destructive button choices
      buttons: [
        { text: 'Take Photo' },
        { text: 'Choose Existing' }
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
      }
    });
  };

  return {
    get: selectPhotoType
  };
});
