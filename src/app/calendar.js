module.exports = {
  template: require('./calendar.html'),
  controller: function () {
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
    };
    this.setDate(today);
  }
};
