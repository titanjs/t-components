module.exports = Dialog;
function Dialog() {}
Dialog.prototype.view = __dirname;

Dialog.prototype.create = function(model, dom) {
  var modal = this;
  dom.on('keydown', function(e) {
    if (!model.get('show')) return;
    if (e.keyCode === 27) {  // Escape
      modal.hide('escape');
    }
  });
};

Dialog.prototype.show = function() {
  var model = this.model;
  this.emitDelayable('show', function() {
    model.set('show', true);
    setTimeout(function() {
      model.set('faded', true);
    }, 0);
  });
};

Dialog.prototype.affirm = function() {
  this.emitDelayable('affirm', function() {});
};

Dialog.prototype.hide = function(action) {
  var cancelled = this.emitCancellable('hide', action);
  if (cancelled) return;
  var model = this.model;
  model.set('faded', false);
  setTimeout(function() {
    model.set('show', false);
  }, 300);
};
