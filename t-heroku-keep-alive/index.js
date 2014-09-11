module.exports = HerokuKeepAlive;
function HerokuKeepAlive() {}
HerokuKeepAlive.prototype.view = __dirname;
HerokuKeepAlive.prototype.create = function() {
  var d = this.model.get('duration');
  var model = this.app.model;
  var duration;
  if (d) {
    duration = parseFloat(d) || 30000;
  } else {
    duration = 30000;
  }
  var duration = this.model.get('duration') || 30000;
  var ping = function() {
    var time = new Date().getTime();
    model.root.channel.send('ping', time, function(msg) {
       // console.log(msg);
    });
  };
  // We only want one timer running, so we will use a global.
  // TODO use HerokuKeepAlive.prototype.destroy instead.
  if (typeof window._heroku_keep_alive_timer === 'number') {
  } else {
    window._heroku_keep_alive_timer = window.setInterval(ping, duration);
  }
};
