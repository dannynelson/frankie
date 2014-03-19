angular.module('services.loading', ['ionic'])

.factory('loading', function($ionicLoading) {
  var loading;

  return {
    show: function() {
      loading = $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 400
      });
    },
    hide: function() {
      loading.hide();
    }
  };
});
