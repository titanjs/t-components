module.exports = DisqusComments;

function DisqusComments(){};
DisqusComments.prototype.view = __dirname;

DisqusComments.prototype.init = function(model) { }

DisqusComments.prototype.create = function(model, dom) {
  if (!window.DISQUS) {
    var dsq = document.createElement('script');
    dsq.type = 'text/javascript';
    dsq.async = true;
    dsq.src = '//' + model.get('shortname') + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  } else {
    // if we have a disqus var then reset it.
    DISQUS.reset({
      reload: true,
      // Optionally set the page identifier and page url by passinging in
      // pageIdentifier and pageUrl attributes.
      config: function() {
        var pi = modle.get('pageIdentifier');
        if (pi) {
          this.page.identifier = pi;
        }
        var pu = modle.get('pageUrl');
        if (pu) {
          this.page.url = pu;
        }
      }
    });
  }
};
