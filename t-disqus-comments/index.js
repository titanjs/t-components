module.exports = run;

function run(app, options){
  options || (options = {});

  app.use(require('t-form/index.js'));

  app.component(require('t-admin/index.js'));
  app.component(require('t-auth/index.js'));
  app.component(require('t-buttons/index.js'));
  app.component(require('t-counter/index.js'));
  app.component(require('t-datetime/index.js'));
  app.component(require('t-disqus-comments/index.js'));
  app.component(require('t-dropdown/index.js'));
  app.component(require('t-editor/index.js'));
  app.component(require('t-google-analytics/index.js'));
  app.component(require('t-google-authorship/index.js'));
  app.component(require('t-image/index.js'));
  app.component(require('t-image-viewer/index.js'));
  app.component(require('t-layout-section/index.js'));
  app.component(require('t-modal/index.js'));
  app.component(require('t-multiselect/index.js'));
  app.component(require('t-polyfill-ie8/index.js'));
  app.component(require('t-richtext/index.js'));
  app.component(require('t-slider/index.js'));
  app.component(require('t-social-share/index.js'));
  app.component(require('t-tabs/index.js'));
  app.component(require('t-tumblr/index.js'));
}
