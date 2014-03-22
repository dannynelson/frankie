angular.module('directives.map', [])

.directive('map', function() {
  return {
    restrict: 'EA',
    scope: {
      address: '='
    },
    replace: true,
    template: '<div></div>',
    link: function(scope, element, attrs) {
      debugger;
      var geocoder;
      var map;
      function initialize() {
        geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(-34.397, 150.644);
        var mapOptions = {
          zoom: 8,
          center: latlng
        };
        map = new google.maps.Map(element[0], mapOptions);
      }

      function codeAddress() {
        var address = scope.address;
        geocoder.geocode( { 'address': address}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
          } else {
            alert("Geocode was not successful for the following reason: " + status);
          }
        });
      }
      initialize();
      codeAddress();
      // var myLatLng = new google.maps.LatLng(32.7153292, -117.1572551);
      // var myOptions = {
      //   zoom: 11,
      //   center: myLatLng,
      //   mapTypeId: google.maps.MapTypeId.ROADMAP
      // };
      // var map = new google.maps.Map(element[0], myOptions);

      // // To add the marker to the map, use the 'map' property
      // var marker = new google.maps.Marker({
      //   position: myLatLng,
      //   map: map
      // });
    }
  };
});
