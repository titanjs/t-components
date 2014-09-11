module.exports = Image;
function Image() {}
Image.prototype.view = __dirname;

Image.prototype.init = function() {
  var realSrc = null;
  var m = this.model;
  var src = m.get('src');
  var width = m.get('width');
  var height = m.get('height');
  var slug = m.get('slug') || 'image';
  var fileType = m.get('fileType') || 'jpg';

  if (src) {
    realSrc = '/-/images/' + src + '/-/scale_crop/' + width + 'x' + height + '/center/' + slug + '.' + fileType;
  } else{
    // TODO: generate this on the server using imageMagic or simular.
    realSrc = 'http://placehold.it/' + width + 'x' + height + '/00000/ffffff';
  }
  
  this.model.set('realSrc', realSrc);
};
