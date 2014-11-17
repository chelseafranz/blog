(function (){

  App.Views.blogPostsView = Parse.View.extend({

      el: '#blogList',

      template: _.template($('#allBlogPosts').html()),

      initialize: function (options) {
          this.options= options;
        $('#welcomePage').empty();
        this.collection.on('sync', this.blogQuery, this);
        this.render();

      query=  new Parse.Query(App.Models.blogPost);
      query.contains('tags', 'tags');
      query.find({
        success: function(results) {
          console.log("Successfully retrieved " + results.length + " post.");
        for (var i = 0; i < results.length; i++) { 
          var object = results[i];
          console.log(object.id + ' - ' + object.get('App.user.attributes.username'));
          }
          },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
  }
});

      },

      render: function(){
        this.$el.empty();
        var self = this;

        this.collection.each( function (x) {
          self.$el.append(self.template(x.toJSON()));
        });

      }


  })
}());
