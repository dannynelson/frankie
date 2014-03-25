describe('ProjectsCtrl', function() {
  var $scope, capturedUrl;

  beforeEach(function () {
    // TODO: find a way to do this without loading ionic
    module('ionic'); // Need ionic loaded for $stateProvider
    module('main.projects');
    inject(function($injector) {
      $scope = {};
      $controller = $injector.get('$controller');
      var ProjectsCtrl = $controller('ProjectsCtrl', {
        $scope: $scope,
        $location: {
          url : function(url) {
            capturedUrl = url;
          }
        },
        projects: []
      });
    });
  });

  it('should have a title Projects', inject( function() {
    expect($scope.title).to.equal('Projects');
  }));
});
