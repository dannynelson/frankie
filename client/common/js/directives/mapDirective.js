angular.module('directives.map', [])

.directive('map', function() {
    return {
        restrict: 'EA',
        replace: true,
        template: '<div></div>',
        link: function(scope, element, attrs) {
            var myOptions = {
                zoom: 6,
                center: new google.maps.LatLng(46.87916, -3.32910),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(element[0], myOptions);
        }
    };
})
