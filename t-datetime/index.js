var moment = require('moment');

module.exports = Datetime;
function Datetime() {}
Datetime.prototype.view = __dirname;

Datetime.prototype.init = function(model) {
  var currentDate = model.get('value');
  var formatedDate;
  if (currentDate) {
    formatedDate = moment(new Date(currentDate)).format('YYYY/MM/DD');
  }
  model.set('_sudoValue', formatedDate);
};

Datetime.prototype.create = function(model) {
  $('.datetime').each(function() {
    var el = $(this);
    el.datetimepicker();
    el.on('changeDate', function(e) {
      // XXX remove jQuery. for the some reason the val is not found when using dom.element.
      var input = el.find('input');
      model.set('value', +(new Date(input.val())));
    });
  });
};

Datetime.prototype.inputChange = function(e) {
  this.model.set('value', +(new Date(e.target.value)));
};
