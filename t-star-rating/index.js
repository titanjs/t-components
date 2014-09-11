module.exports = StarRating;
function StarRating() {}

StarRating.prototype.view = __dirname;

StarRating.prototype.init = function() {
  this.model.setNull('outOf', [0, 1, 2, 3, 4]);
  this.model.set('rating', this.getAttribute('rating'));
  this.model.set('hover', 0);
};

StarRating.prototype.create = function() {};

StarRating.prototype.hover = function(val) {
  this.model.set('stopOut', true);
  this.model.set('hover', val + 1);
};

StarRating.prototype.out = function() {
  this.model.set('stopOut', false);
  var _this = this;
  setTimeout(function() {
    if (!_this.model.get('stopOut')) {
      _this.model.set('hover', 0);
    }
  }, 500);
};

StarRating.prototype.select = function(val) {
  this.model.set('rating', val + 1);
};
