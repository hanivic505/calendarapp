var angular = require('angular');

var calendar = require('./app/calendar');
require('angular-ui-router');
var modal = require('angular1-ui-bootstrap4/src/modal');
var popover = require('angular1-ui-bootstrap4/src/popover');
var routesConfig = require('./routes');

require('./index.scss');

var app = 'app';
module.exports = app;

angular
  .module(app, ['ui.router', modal, popover])
  .config(routesConfig)
  .component('app', calendar)
  .run(function (LocalStorageService) {
    LocalStorageService.setObject('hanivicEvents', [{
      title: 'Event One',
      description: 'birthday',
      date: new Date().setDate(22)
    }, {
      title: 'Event Three',
      description: 'birthday',
      date: new Date().setDate(2)
    }, {
      title: 'Event 2',
      description: 'Aniversary',
      date: new Date().setDate(22)
    }, {
      title: 'Ahmed Wedding',
      description: 'the wedding will be held at the Grand Mosque in Giza',
      date: new Date().setDate(32)
    }]);
  })
  .controller('ModalInstanceController', function ($uibModalInstance, day, events) {
    var vm = this;
    vm.events = events;
    vm.day = day;

    vm.ok = function () {
      $uibModalInstance.close('closed');
    };

    vm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  })
  .component('modalComponent', {
    templateUrl: 'myModalContent.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: function () {
      var vm = this;

      vm.$onInit = function () {};

      vm.ok = function () {
        vm.close({
          $value: 'closed'
        });
      };

      vm.cancel = function () {
        vm.dismiss({
          $value: 'cancel'
        });
      };
    }
  });

require('./app/services');
require('./app/components');
