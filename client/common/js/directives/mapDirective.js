angular.module('directives.map', [])

.directive('map', function() {
  return {
    restrict: 'EA',
    replace: true,
    template: '<div></div>',
    link: function(scope, element, attrs) {
      var myLatLng = new google.maps.LatLng(32.7153292, -117.1572551);
      var myOptions = {
        zoom: 11,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(element[0], myOptions);

      // To add the marker to the map, use the 'map' property
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map
      });
    }
  };
});
