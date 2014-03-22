// angular.module('services.geocode', [])

// .factory('geocode', function() {
//   geocoder = new google.maps.Geocoder();

//   return function(address) {
//     geocoder.geocode({address: address}, function(results, status) {
//       if (status == google.maps.GeocoderStatus.OK) {
//         return results[0].geometry.location;
//         // map.setCenter(results[0].geometry.location);
//         // var marker = new google.maps.Marker({
//         //     map: map,
//         //     position: results[0].geometry.location
//         // });
//       } else {
//         alert("Was not able to locate the address for the following reason: " + status);
//       }
//     });
//   };
// });
