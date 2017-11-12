var angular = require('angular');
require('angular-mocks');
var {LocalStorage} = require('./localStorage');

describe('LocalStorage service', function () {
  beforeEach(function () {
    angular
      .module('LocalStorage', [])
      .service('LocalStorage', LocalStorage);
    angular.mock.module('LocalStorage');
  });

  it('should', angular.mock.inject(function (LocalStorage) {
    expect(LocalStorage.getData()).toEqual(3);
  }));
});
