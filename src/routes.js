module.exports = routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/calendarapp');

  $stateProvider
    .state('app', {
      url: '/calendarapp',
      component: 'app'
    });
}
