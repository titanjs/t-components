module.exports = Counter;
function Counter() {}
Counter.prototype.view = __dirname;

Counter.prototype.init = function(model) { };

Counter.prototype.create = function(model) {
  var time = this.model.get('time');
  this.tick();
};

Counter.prototype.tick = function() {
  var self = this;
  var time = this.model.get('time');
  this.model.set('count', this.toSinceString(time));
  setTimeout(function () { self.tick.call(self); }, 1000);
};

Counter.prototype.toSinceString = function(time) {
  if (!time) { return; }
  
  var s = (Date.now() - time);
  function addZ(n) {
    return (n < 10 ? '0' : '') + n;
  }
  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;
  return addZ(hrs) + ':' + addZ(mins) + ':' + addZ(secs);
};
