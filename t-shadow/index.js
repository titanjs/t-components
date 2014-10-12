function Shadow() {}

module.exports = Shadow;

Shadow.prototype.view = __dirname;

Shadow.prototype.init = function () {
  this.model.setNull('z', 0);
  this.model.setNull('animated', false);
  this.model.setNull('splash', false);
};
