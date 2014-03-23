/**
 * Resource for getting lat long from an address
 * 
 * Just send the address as a resource param and you're good to go.
 * lat lng comes back in response.results.geometry.location
 */

angular.module('resources.Geocode', [])

.factory('Geocode', function($resource) {
  var address = 'https://maps.googleapis.com/maps/api/geocode/json';
  var params = {
    key: 'AIzaSyCwnLbmNSUjvF69CPc55CeT1IuRxR_q_Fw',
    sensor: true
  };
  actions = {};
  return $resource(address, params, actions);
});
