// all dates should be in YYYY-MM-DD format
angular.module('filters.phone', [])

// converts to time from now, e.g. in a month
.filter('phone', function() {
  return function(numberStr) {
    return numberStr.substring(0,3)+'-'+numberStr.substring(3,6)+'-'+numberStr.substring(6);
  };
});
