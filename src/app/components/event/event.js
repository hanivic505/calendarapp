function eventController() {

}

module.exports = {
  template: require('./event.html'),
  controller: eventController,
  bindings: {
    eventInfo: '='
  }
};
