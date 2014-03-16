angular.module('resources.user', [])

.factory('User', function() {
  // Joined date?
  var User = {
    id: 1,
    name: 'Frankie',
    password: 'baller',
    profilePhoto: 'http://www.zunuki.com/UsrData/profile-pic/profile-placeholder.gif',
    company: 'Frankie\'s plumbing',
    phone: '8583374505',
    email: 'danielnelsonguitar@gmail.com',
    location: 'San Francisco',
    title: 'plumber',
    rating: 4.5,
    yearsExp: 5,
    bio: 'I am super awesome at plumbing. I fix pipes and stuff.'
  };

  return {
    get: function() {
      return User;
    }
  };
});
