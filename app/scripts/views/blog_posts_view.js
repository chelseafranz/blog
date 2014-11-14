(function (){

  App.Views.blogPostsView = Parse.View.extend({

      el: '#blogList',

      

      template: _.template($('#allBlogPosts').html()),

      initialize: function (options) {

        $('#welcomePage').empty();
        this.collection.on('sync', this.blogQuery, this);
        this.render();

      },

      render: function(){

        var self = this;

        this.collection.each( function (x) {
          self.$el.append(self.template(x.toJSON()));
        });

      }


  })
}());