'use strict';

describe('Service: pyRestangular', function () {

  // load the service's module
  beforeEach(module('appBApp'));

  // instantiate service
  var pyRestangular;
  beforeEach(inject(function (_pyRestangular_) {
    pyRestangular = _pyRestangular_;
  }));

  it('should do something', function () {
    expect(!!pyRestangular).toBe(true);
  });

});
