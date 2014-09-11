var _ = require('lodash');

module.exports = SocialShare;
function SocialShare(){}
SocialShare.prototype.view = __dirname;

SocialShare.prototype.init = function(model) {
  model.set('showEmailForm', false);
};

SocialShare.prototype.create = function(model, dom) {
  model.set('msg', { message: model.get('defaultShareMessage') });
};

SocialShare.prototype.twitter = function(e, el) {
  var project = this.model.get('_page.project');
  var tweetText = '';
  if (project && project.title) {
    tweetText = 'Just watched ' + project.title + ' by @mcclurecreative';
  }
  var eTT = encodeURIComponent(tweetText);
  var url = encodeURIComponent(location.href);
  window.open(
    'https://twitter.com/intent/tweet?text=' + eTT +
    '&url' + url,
    'twitter-share-dialog',
    'width=550,height=420');
};

SocialShare.prototype.facebook = function(e, el) {
  window.open(
    'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(location.href),
    'facebook-share-dialog',
    'width=626,height=436');
};

SocialShare.prototype.gplus = function(e, el) {
  var url = encodeURIComponent(location.href);
  window.open(
    'https://plus.google.com/share?&url=' + url,
    'gplus-share-dialog',
    'width=500,height=600');
};

SocialShare.prototype.toggleEmailForm = function() {
  this.model.set('showEmailForm', !this.model.get('showEmailForm'));
};

SocialShare.prototype.sendEmail = function() {
  var self = this;
  var msg = self.model.get('msg');
  if (!msg) return;
  var cancelled = this.emit('send', function() {
  });
};
