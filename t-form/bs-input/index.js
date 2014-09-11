module.exports = Input;
function Input() {}
Input.prototype.view = __dirname;

Input.prototype.checkRequired = function() {
  if (this.model.get('required') && !this.input.value) {
    this.model.set('error', 'This feild is required');
    return;
  };
  this.model.set('error', '');
};
