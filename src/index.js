var angular = require('angular');

var calendar = require('./app/calendar');
require('angular-ui-router');
var routesConfig = require('./routes');

require('./index.scss');

var app = 'app';
module.exports = app;

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('app', calendar);
