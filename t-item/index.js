function Item() {}

module.exports = Item;

Item.prototype.view = __dirname;

Item.prototype.init = function () {};

Item.prototype.create = function () {
  this.model.on('all', 'active', (function (path, event, active) {
    if (this.model.get('active')) {
      // FIXME: remove when paper-ripple can have a default 'down' state.
      if (!this.lastEvent) {
        var rect = this.wrapper.getBoundingClientRect();
        this.lastEvent = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        };
      }
      this.ripple.downAction(this.lastEvent);
    } else {
      this.ripple.upAction();
    }
    //this.adjustZ();
  }).bind(this));
};

Item.prototype.adjustZ = function () {
  if (this.model.get('focused')) {
    this.model.set('splash', true);
  } else {
    this.model.set('splash', false);

    if (this.model.get('active')) {
      this.model.set('z', 2);
    } else if (this.model.get('disabled')) {
      this.model.set('z', 0);
    } else {
      this.model.set('z', 1);
    }

  }
};

Item.prototype.downAction = function(e) {
  this.lastEvent = e;

  this.model.set('pressed', true);
  this.model.set('focused', false);

  if (this.model.get('isToggle')) {
    this.model.set('active', !this.model.get('active'));
  } else {
    this.model.set('active', true);
  }
  this.emit('mousedown', e);
};

Item.prototype.upAction = function(e) {
  this.model.set('pressed', false);

  if (!this.model.get('isToggle')) {
    this.model.set('active', false);
  }
  this.emit('mouseup', e);
};

Item.prototype.focusAction = function(e, el) {
  this.emit('click', e, el, this.model.get('item'));
};

Item.prototype.blurAction = function(e, el) {
  this.emit('click', e, el, this.model.get('item'));
};

Item.prototype.clickAction = function(e, el) {
  this.emit('click', e, el, this.model.get('item'));
};

Item.prototype.dblClickAction = function(e, el) {
  this.emit('dblclick', e, el, this.model.get('item'));
};

Item.prototype.contextMenuAction = function(e, el) {
  // Note that upAction may fire _again_ on the actual up event.
  this.upAction(e);
  this.focusAction();
  this.emit('click', e, el, this.model.get('item'));
};
