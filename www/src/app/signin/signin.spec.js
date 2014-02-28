
describe( 'SigninCtrl', function() {
  describe( 'isCurrentUrl', function() {
    var SigninCtrl, $location, $scope, $state, $injector;

    beforeEach( module( 'frankie.signin' ) );

    beforeEach( inject( function( $controller, _$rootScope_, _$state_, _$injector_, $templateCache ) {
      $location = _$location_;
      $rootScope = _$rootScope_;
      $state = _$state_;
      // _$injector_
      SigninCtrl = $controller( 'SigninCtrl', { $location: $location, $scope: $scope });
    }));

    it( 'should pass a dummy test', inject( function() {
      expect( SigninCtrl ).toBeTruthy();
    }));
  });
});

