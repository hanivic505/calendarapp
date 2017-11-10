module.exports = {
  template: require('./calendar.html'),
  controller: function ($log) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
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
    var today = new Date();
    this.setDate = function (date) {
      this.days = [];
      this.selectedMonth = {
        date: date,
        dayName: days[date.getDay()],
        month: date.getMonth(),
        monthName: months[date.getMonth()],
        year: date.getFullYear()
      };
      let tempDate = new Date(this.selectedMonth.date.setDate(1));
      for (let i = tempDate.getDay(); i > 0; i--) {
        let tmp = new Date(tempDate.toDateString());
        this.days.push(new Date(tmp.setDate(tmp.getDate() - i)));
      }
      do {
        let tmp = new Date(tempDate.toDateString());
        this.days.push(tmp);
        tempDate = new Date(tempDate.setDate(tempDate.getDate() + 1));
      }
      while (this.selectedMonth.month === tempDate.getMonth());
      $log.log(tempDate.getDay());
      if (tempDate.getDay() !== 0) {
        for (let i = 0; i < 7 - tempDate.getDay(); i++) {
          let tmp = new Date(tempDate.toDateString());
          this.days.push(new Date(tmp.setDate(tmp.getDate() + i)));
        }
      }
    };
    this.setDate(today);
  }
};
