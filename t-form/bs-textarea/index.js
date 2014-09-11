module.exports = Textarea;
function Textarea() {}
Textarea.prototype.view = __dirname;

Textarea.prototype.checkRequired = function() {
  if (this.model.get('required') && !this.textarea.value) {
    this.model.set('error', 'This feild is required');
    return;
  };
  this.model.set('error', '');
};
