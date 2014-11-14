(function (){

  App.Views.blogPostsView = Parse.View.extend({

      tagName: 'ul',
      className: 'blogList',

      template: _.template($('#allBlogPosts').html()),

      initialize: function (options) {
        $('#welcomePage').empty();
        this.render();
        $('#blogList').html(this.$el);




        this.options = options;

        console.log(this.collection);
        this.collection.off();
        this.collection.on('sync', this.blogQuery, this);




        this.blogQuery();
      },

      blogQuery: function () {

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
