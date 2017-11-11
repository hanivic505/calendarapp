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
  controller: function () {
    this.conf = {
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    };
    // this.conf = {
    //   days: ['الأحد', 'الأثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    //   months: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونية', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
    // };
    this._today = new Date();
    this.isToday = function (d) {
      return new Date().setHours(0, 0, 0, 0) === d.getTime();
    };
    this.isDisabled = function (d) {
      return this.selectedMonth.month !== d.getMonth();
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
    this.setDate = function (_date) {
      this.days = [];
      this.selectedMonth = {
        date: _date,
        dayName: this.conf.days[_date.getDay()],
        month: _date.getMonth(),
        monthName: this.conf.months[_date.getMonth()],
        year: _date.getFullYear()
      };
      let tempDate = new Date(this.selectedMonth.date.setDate(1));
      for (let i = tempDate.getDay(); i > 0; i--) {
        let _tmp = new Date(tempDate.toDateString());
        this.days.push(new Date(_tmp.setDate(_tmp.getDate() - i)));
      }
      do {
        let _tmp = new Date(tempDate.toDateString());
        this.days.push(_tmp);
        tempDate = new Date(tempDate.setDate(tempDate.getDate() + 1));
      }
      while (this.selectedMonth.month === tempDate.getMonth());
      if (tempDate.getDay() !== 0) {
        for (let i = 0; i < 7 - tempDate.getDay(); i++) {
          let _tmp = new Date(tempDate.toDateString());
          this.days.push(new Date(_tmp.setDate(_tmp.getDate() + i)));
        }
      }
    };
    this.setDate(this._today);
  }
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {


routesConfig.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];module.exports = routesConfig;

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


/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = "<h1>{{ $ctrl.selectedMonth.monthName + ', ' + $ctrl.selectedMonth.year }}\r\n  <div class=\"pull-right\">\r\n    <button class=\"btn btn-sm btn-default\" ng-click=\"$ctrl.prevMonth()\">\r\n      <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\r\n    </button>\r\n    <button class=\"btn btn-sm btn-default\" ng-click=\"$ctrl.setToday()\">Today</button>\r\n    <button class=\"btn btn-sm btn-default\" ng-click=\"$ctrl.nextMonth()\">\r\n      <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\r\n    </button>\r\n  </div>\r\n</h1>\r\n<div class=\"col-md-12\">\r\n  <div class=\"row\">\r\n    <div class=\"day header\" ng-repeat=\"d in $ctrl.conf.days\" ng-bind=\"d\"></div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"day\" ng-class=\"{'today':$ctrl.isToday(day),'disabled':$ctrl.isDisabled(day)}\" ng-repeat=\"day in $ctrl.days\"><span>{{day.getDate()}}</span>\r\n    <ul>\r\n      <li><header>Event Title</header><p>Event Body</p><footer>14:50</footer></li>\r\n      <li><header>Event Title</header><p>Event Body</p><footer>14:50</footer></li>\r\n      <li><header>Event Title</header><p>Event Body</p><footer>14:50</footer></li>\r\n    </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

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