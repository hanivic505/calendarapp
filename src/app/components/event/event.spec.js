var angular = require('angular');
require('angular-mocks');
var event = require('./event');

describe('event component', function () {
  beforeEach(function () {
    angular
      .module('event', ['app/components/event/event.html'])
      .component('event', event);
    angular.mock.module('event');
  });

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<event></event>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
