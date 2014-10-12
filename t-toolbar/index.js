function Toolbar() {}

module.exports = Toolbar;

Toolbar.prototype.view = __dirname;

Toolbar.prototype.init = function(){
  this.model.setNull('mode', '');
};
