describe("main", function () {
  beforeEach(function() {
    module('ionic'); // Need ionic loaded for $stateProvider
    module('main');
  });

  describe('MainCtrl', function() {
    var $scope, $controller;

    beforeEach(function () {
      inject(function($injector) {
        $scope = {};
        $controller = $injector.get('$controller');
        var MainCtrl = $controller('MainCtrl', {
          $scope: $scope
        });
      });
    });

    it("should create a left button for toggling the sideMenu", inject(function() {
      expect($scope.leftButtons.length).to.equal(1);
    }));
  });

  describe('MenuCtrl', function() {
    var $scope, $controller, $location;

    beforeEach(function () {
      inject(function($injector) {
        $scope = {
          sideMenuController: {
            toggleLeft: function() {}
          }
        };
        $controller = $injector.get('$controller');
        $location = $injector.get('$location');
        var MenuCtrl = $controller('MenuCtrl', {
          $scope: $scope
        });
      });

      sinon.stub($scope.sideMenuController, 'toggleLeft');
    });

    describe('.goTo()', function () {
      it("should change window location to given path", inject(function() {
        $scope.goTo('main/projects');
        expect($location.url()).to.equal('/main/projects');
      }));

      it("should toggle sideMenuController", inject(function() {
        $scope.goTo('main/projects');
        expect($scope.sideMenuController.toggleLeft).to.have.been.calledOnce;
      }));
    });
  });
});

