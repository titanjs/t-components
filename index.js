module.exports = function(app, options) {
  app.component(require('./t-icon'));
  app.component(require('./t-calendar'));
  app.component(require('./t-checkbox'));
  app.component(require('./t-datetime'));
  app.component(require('./t-datetime-input'));
  app.component(require('./t-dropdown'));
  app.component(require('./t-dialog'));
  app.component(require('./t-favicons'));
  app.component(require('./t-image'));
  app.component(require('./t-input'));
  app.component(require('./t-radio-button'));
  app.component(require('./t-star-rating'));
  app.component(require('./t-stared'));
  // app.loadStyles();
};
