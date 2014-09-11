var moments = require('moment');

exports.init = function(model) {
  var currentDate = model.get('value');
  var formatedDate;
  if (currentDate) {
    formatedDate = moment(new Date(currentDate)).format("YYYY/MM/DD")
  }
  model.set('_sudoValue', formatedDate);
};

exports.create = function(model, dom) {
  $('.datetime').each(function() {
    el = $(this);
    el.datetimepicker();
    el.on('changeDate', function(e) {
      // XXX remove jQuery. for the some reason the val is not found when using dom.element.
      var input = el.find('input');
      model.set('value', +(new Date(input.val())));
    });
  });
}

exports.inputChange = function(e) {
  this.model.set('value', +(new Date(e.target.value)));
};
