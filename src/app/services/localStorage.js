function LocalStorage($window) {
  this.set = function (key, value) {
    $window.localStorage[key] = value;
  };
  this.get = function (key, defaultValue) {
    return $window.localStorage[key] || defaultValue || false;
  };
  this.setObject = function (key, value) {
    $window.localStorage[key] = angular.toJson(value);
  };
  this.getObject = function (key, defaultValue) {
    if (angular.isDefined($window.localStorage[key])) {
      return angular.fromJson($window.localStorage[key]);
    }
    return defaultValue || false;
  };
  this.remove = function (key) {
    $window.localStorage.removeItem(key);
  };
  this.clear = function () {
    $window.localStorage.clear();
  };
}

module.exports = LocalStorage;
