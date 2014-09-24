module.exports = RadioGroup;
function RadioGroup() {}
RadioGroup.prototype.view = __dirname;

RadioGroup.prototype.create = function(model, dom) {
  // Watch the change of the options and update the selected element if needed
  model.on('change', 'options', function() {
    model.set('value', model.get('value'));
  });
};

RadioGroup.prototype.select = function(option) {
  this.model.set('value', optionValue(option));
};

RadioGroup.prototype.isSelected = function(option) {
  return option.value === this.model.get('value') ? true : false;
};

function optionValue(option) {
  return (option.hasOwnProperty('value')) ? option.value : option.content;
}
