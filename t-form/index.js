module.exports = function(app, options) {
  app.component(require('./bs-input'));
  app.component(require('./bs-textarea'));
  app.component(require('./bs-controls'));
};
