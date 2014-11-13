(function (){

  App.Views.blogPostsView = Parse.View.extend({

      tagName: 'ul',
      className: 'allPosts',

      template: _.template($('#allBlogPosts').html()),

      initialize: function (options) {

        this.options = options;

        this.collection.off();
        this.collection.on('sync', this.blogQuery, this);

        $('#blogList').html(this.$el);

        this.blogQuery();
      },

      coffeeQuery: function () {

        var self = this;

      var blog_writer = new Parse.Query(App.Models.blogPost);
      blog_writer.equalTo('user', App.user);
      blog_writer.find({
        success: function (results) {
          self.collection = results;
          self.render();
        }
      });
      }
  })
}());
