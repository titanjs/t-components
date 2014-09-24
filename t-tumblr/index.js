module.exports = function(app, options) {
  app.component(require('./photostream'));
  app.loadStyles(__dirname + '/css/tumblr');
};
