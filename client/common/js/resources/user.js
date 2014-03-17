angular.module('resources.user', [])

.factory('User', function() {
  // Joined date?
  // var User = {
  //   id: 1,
  //   name: 'Frankie',
  //   password: 'baller',
  //   profilePhoto: 'http://www.zunuki.com/UsrData/profile-pic/profile-placeholder.gif',
  //   company: 'Frankie\'s plumbing',
  //   phone: '8583374505',
  //   email: 'danielnelsonguitar@gmail.com',
  //   location: 'San Francisco',
  //   title: 'plumber',
  //   rating: 4.5,
  //   yearsExp: 5,
  //   bio: 'I am super awesome at plumbing. I fix pipes and stuff.'
  // };
  
  var user;

  return {
    signin: function(username, password, onSuccess) {
      Parse.User.logIn(username, password, {
        success: function(retrievedUser) {
          user = retrievedUser;
          onSuccess();
        },
        error: function(retrievedUser, error) {
          alert("Invalid Username or Password");
        }
      });
    },

    signup: function(username, password, onSuccess) {
      user.set({
        username: username,
        password: password
      });
      user.signUp(null, {
        success: function(retrievedUser) {
          user = retrievedUser;
          alert('account created');
          onSuccess();
        },
        error: function(retrievedUser, error) {
          alert("Error: " + error.code + " " + error.message);
        }
      });
    },

    signout: function() {
      Parse.User.logOut();
    },

    resetPassword: function(onSuccess) {
      Parse.User.requestPasswordReset(user.get('email'), {
        success: function() {
          alert("Request Sent");
          onSuccess();
        },
        error: function(error) {
          alert("Error: " + error.code + " " + error.message);
        }
      });
    },

    getCurrent: function() {
      if (!user) {
        user = Parse.User.current() || new Parse.User();
        user = user.attributes;
      }
      return user;
    }
  };
});
