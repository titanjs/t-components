var _ = require('lodash');
var jsonpClient = require('jsonp-client');

module.exports = Photostream;
function Photostream(){}
Photostream.prototype.view = __dirname;

// The create function is called after the component is created
// and has been added to the DOM. It only runs in the browser
Photostream.prototype.create = function(model, dom) {
  var userId = this.model.get('userId');
  var apiKey = this.model.get('apiKey');
  var url = '//api.tumblr.com/v2/blog/' + userId + '.tumblr.com/posts/photo?api_key=' + apiKey + '&limit=8&callback=cb2';
  jsonpClient(url, function (err, res) {
    if (res && res.response && res.response.posts) {
      var newPosts = [];
      var posts = res.response.posts;
      _.each(posts, function(p, key, list) {
        // only return photos
        if (p.photos) {
          var obj = {
            title: p.caption,
            url: p.post_url,
            src: p.photos[0].alt_sizes[3].url
          };
          newPosts.push(obj);
        }
      });
      model.set('photos', newPosts);
    }
  });
};
