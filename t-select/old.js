/*
var _ = require('lodash');

module.exports = Dropdown;


function Dropdown() {}
Dropdown.prototype.view = __dirname;
Dropdown.prototype.init = function(model) {
  // Passed in value. This value will corrispond to the id of the options array
  var val = model.get('value');
  // options is an array of values 
  var opts = model.get('options');

  // console.log("options: ", options);
  model.set('selectedIndex', 0);
  
  if (val && opts) {
    var i = _.findIndex(opts, {'value': val});
    model.set('selectedIndex', i);
  }
};

Dropdown.prototype.create = function(model, dom) {
  // Close on click outside of the dropdown
  var self = this;
  this.focusById(model.get('selectedIndex'));

  dom.on('click', function(e) {
    // if (dropdown.toggleButton.contains(e.target)) return;
    if (self.input.contains(e.target)) return;
    if (self.menu.contains(e.target)) return;
    self.makeInActive();
  });

  dom.on('keydown', function(e) {
    self.keydown(e);
  });

  model.on('change', 'options', function() {
    model.set('value', model.get('value'));
    self.emit('change');
  });

  // Watch the change of the options and update the selected element if needed
  model.on('change', 'options', function() {
    model.set('value', model.get('value'));
  });
};

Dropdown.prototype.open = function() {
  // Only open if we have a list of options
  if (this.model.get('options').length) {
    this.model.set('open', true);
  }
};

Dropdown.prototype.close = function() {
  this.model.set('open', false);
};

Dropdown.prototype.makeActive = function() {
  this.model.set('isActive', true);
  this.model.set('open', true);
  this.emit('active');
};

Dropdown.prototype.makeInActive = function() {
  this.model.set('isActive', false);
  this.model.set('open', false);
};

Dropdown.prototype.isOpen = function() {
  return this.model.get('open');
};

// Dropdown.prototype.toggle = function() {
//   this.model.set('open', !this.model.get('open'));
// };

Dropdown.prototype.select = function(option) {
  this.model.set('value', optionValue(option));
  // this.model.set('open', false);
  this.close();
};

Dropdown.prototype.setValue = function(pos) {
  var pos = this.model.get('selectedIndex');
  var opts = this.model.get('options');
  if (pos && opts) {
    var o = optionValue(opts[pos]);
    this.model.set('value', o);
    this.input.focus();
  }
};

// TODO
// Idealy this function would be replaced with something
// that doesn't require knowing the id of the element
Dropdown.prototype.focusById = function(id) {
  var vid = this.model.get('id') + id;
  var e = document.getElementById(vid);
  if (e) {
    e.focus();
    // e.scrollIntoView();
  }
};

Dropdown.prototype.increment = function() {
  var a = this.model.get('selectedIndex');
  // Don't go higher then the number of elements
  if (a >= (this.model.get('options').length - 1)) return;
  var nid = a + 1;
  this.model.set('selectedIndex', nid);
  this.focusById(nid);
};

Dropdown.prototype.decrement = function() {
  var a = this.model.get('selectedIndex');
  // Don't go lower then 0
  if (a === 0) return;
  var nid = a - 1;
  this.model.set('selectedIndex', nid);
  this.focusById(nid);
};

Dropdown.prototype.keydown = function(e, el) {

  var self = this;
  var isActive = this.model.get('isActive');

  // Return if not active
  if (!isActive) return;

  // return if this isn't active
  // e.stopPropagation();

  var IS_MAC        = /Mac/.test(navigator.userAgent);

  var KEY_A         = 65;
  var KEY_COMMA     = 188;
  var KEY_RETURN    = 13;
  var KEY_ESC       = 27;
  var KEY_LEFT      = 37;
  var KEY_UP        = 38;
  var KEY_P         = 80;
  var KEY_RIGHT     = 39;
  var KEY_DOWN      = 40;
  var KEY_N         = 78;
  var KEY_BACKSPACE = 8;
  var KEY_DELETE    = 46;
  var KEY_SHIFT     = 16;
  var KEY_CMD       = IS_MAC ? 91 : 17;
  var KEY_CTRL      = IS_MAC ? 18 : 17;
  var KEY_TAB       = 9;

  var TAG_SELECT    = 1;
  var TAG_INPUT     = 2;

  switch (e.keyCode) {
  case KEY_ESC:
    self.close();
    return;
  case KEY_DOWN:
    if (!self.isOpen()) {
      self.open();
    }
    self.increment();
    e.preventDefault();
    return;
  case KEY_UP:
    self.decrement();
    e.preventDefault();
    return;
  case KEY_TAB:
    if (self.isOpen()) {
      this.setValue();
      this.emit('tab');
      this.makeInActive();
    }
    return;
  case KEY_RETURN:
    if (self.isOpen()) {
      this.setValue();
      this.emit('enter');
      this.close();
      // this.makeInActive();
    }
    var t = String.fromCharCode(KEY_TAB);
    return;
  }
};

Dropdown.prototype.label = {
  get: function(value) {
    var options = this.model.get('options') || [];
    for (var i = 0, len = options.length; i < len; i++) {
      var option = options[i];
      if (value === optionValue(option)) {
        return option.content;
      }
    }
    return this.model.get('prompt');
    // return this.model.get('prompt') || 'Select';
  },
  set: function() {
    // Filter 
    console.log('args', arguments)
  }
};

function optionValue(option) {
  return (option.hasOwnProperty('value')) ? option.value : option.content;
}

 */
