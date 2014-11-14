(function (){

  App.Views.blogPostsView = Parse.View.extend({

      tagName: 'ul',
      className: 'blogList',

      template: $('#allBlogPosts').html(),

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

      render: function(){
        this.$el.html(this.template)
      },

      blogQuery: function () {

        var self = this;

      var blog_author = new Parse.Query(App.Models.blogPost);
      blog_author.equalTo('user', App.user);
      blog_author.find({
        success: function (results) {
          self.collection = results;
          self.render();
        }
      });
      }
  })
}());
