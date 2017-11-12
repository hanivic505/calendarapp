module.exports = {
  template: require('./calendar.html'),
  controller: function ($log, $uibModal, LocalStorageService) {
    var _this = this;
    let _initData = function () {
      _this.events = LocalStorageService.getObject('hanivicEvents');
    };
    _initData();
    $log.log(this.events);
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
    this.getEvents = function (day) {
      let dayEvents = [];
      this.events.map((x, i) => new Date(x.date).setHours(0, 0, 0, 0) === day.getTime() ? dayEvents.push(this.events[i]) : null);
      return dayEvents;
    };
    this.showAllEvents = function (day) {
      var modalInstance = $uibModal.open({
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceController',
        controllerAs: '$ctrl',
        resolve: {
          events: function () {
            return _this.getEvents(day);
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        _this.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  }
};
