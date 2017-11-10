webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  template: __webpack_require__(6),
  controller: function ($log) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.isToday = function (d) {
      return new Date().setHours(0, 0, 0, 0) === d.getTime();
    };
    this.nextMonth = function () {
      this.setDate(new Date(this.selectedMonth.date.setMonth(this.selectedMonth.month + 1)));
    };
    this.prevMonth = function () {
      this.setDate(new Date(this.selectedMonth.date.setMonth(this.selectedMonth.month - 1)));
    };
    this.setToday = function () {
      this.setDate(new Date());
    };
    var today = new Date();
    this.setDate = function (date) {
      this.selectedMonth = {
        date: date,
        dayName: days[date.getDay()],
        month: date.getMonth(),
        monthName: months[date.getMonth()],
        year: date.getFullYear()
      };
      this.days = [];
      let tempDate = new Date(this.selectedMonth.date.setDate(1));
      for (let i = tempDate.getDay(); i > 0; i--) {
        let tmp = tempDate.toDateString();
        this.days.push(new Date(new Date(tmp).setDate(new Date(tmp).getDate() - i)));
      }
      do {
        let tmp = tempDate.toDateString();
        this.days.push(new Date(tmp));
        tempDate = new Date(tempDate.setDate(tempDate.getDate() + 1));
      }
      while (this.selectedMonth.month === tempDate.getMonth());
      for (let i = 0; i < 7 - tempDate.getDay(); i++) {
        let tmp = tempDate.toDateString();
        this.days.push(new Date(new Date(tmp).setDate(new Date(tmp).getDate() + i)));
      }
      $log.log(this.days);
    };
    this.setDate(today);
  }
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {


routesConfig.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];module.exports = routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    });
}


/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = "<h1>{{ $ctrl.selectedMonth.day+ ' ' + $ctrl.selectedMonth.monthName + ', ' + $ctrl.selectedMonth.year }}\n  <div class=\"pull-right\">\n    <button class=\"btn btn-sm btn-default\" ng-click=\"$ctrl.prevMonth()\">\n      <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\n    </button>\n    <button class=\"btn btn-sm btn-default\" ng-click=\"$ctrl.setToday()\">Today</button>\n    <button class=\"btn btn-sm btn-default\" ng-click=\"$ctrl.nextMonth()\">\n      <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</h1>\n<div class=\"col-md-12\">\n  <div class=\"row\">\n    <div class=\"day header\">Sunday</div>\n    <div class=\"day header\">Monday</div>\n    <div class=\"day header\">Tuesday</div>\n    <div class=\"day header\">Wednesday</div>\n    <div class=\"day header\">Thursday</div>\n    <div class=\"day header\">Friday</div>\n    <div class=\"day header\">Saturday</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"day\" ng-class=\"{'today':$ctrl.isToday(day)}\" ng-repeat=\"day in $ctrl.days\">{{day.getDate()}}</div>\n  </div>\n</div>\n";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var angular = __webpack_require__(0);

var calendar = __webpack_require__(3);
__webpack_require__(1);
var routesConfig = __webpack_require__(4);

__webpack_require__(2);

var app = 'app';
module.exports = app;

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('app', calendar);


/***/ })
],[7]);