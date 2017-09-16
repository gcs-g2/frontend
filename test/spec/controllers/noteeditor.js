'use strict';

describe('Controller: NoteeditorCtrl', function () {

  // load the controller's module
  beforeEach(module('appBApp'));

  var NoteeditorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NoteeditorCtrl = $controller('NoteeditorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NoteeditorCtrl.awesomeThings.length).toBe(3);
  });
});
