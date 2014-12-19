module.exports = Slider;
var _ = require('lodash');


function Slider() {}
Slider.prototype.view = __dirname;

Slider.prototype.init = function(model) {
  var q = this.getAttribute('query');
  var isFeature = this.getAttribute('featured');
  // console.log('q: ', q);
  if (isFeature) {
    model.set('first', _.first(q));
    var f = q.shift();
    model.set('rest', this.toListOfList(q));
    console.log("first;;;;;;;", model.get('first'));
    console.log("rest;;;;;;;;", model.get('rest'));
  } else {
    model.set('query', q);
  };

};

Slider.prototype.create = function(model, dom) {
  require('./sly');
  $('.slider-frame').each(function() {
    var $wrap, el;
    var el = $(this);
    $wrap = el.parent();
    el.sly({
      horizontal: 1,
      itemNav: 'basic',
      smart: 0,
      scrollSource: null,
      scrollBy: 0,
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 0,
      scrollBar: $wrap.find('.scrollbar'),
      activatePageOn: 'click',
      speed: 300,
      elasticBounds: 1,
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1
    });
    $(window).resize(function() {
      el.sly('reload');
    });
  });
};

Slider.prototype.first = function(q) {
  if (q && q.length) return q.shift();
  return null;
};

Slider.prototype.rest = function(q) {
  if (q && q.length) return this.toListOfList(q);
  return null;
};

Slider.prototype.toListOfList = function(r) {
  var all = [];
  if (r) {
    var count = 0;
    var length = r.length;
    var group = [];
    var i = 0;
    while (i < length) {
      // Start over after if count equals 2
      if (count === 2) {
        all.push(group);
        count = 0;
        group = [];
      }
      group.push(r[i]);
      i++;
      count++;
    }
    if (group) { all.push(group); }
  }
  return all;
};
