(function(){

	App.Views.exploreView= Parse.View.extend({
		
	template: _.template($('#allBlogPosts').html()),

      initialize: function (options) {
          this.options= options;
   
        this.render();
        console.log('explore page');
      },

      render: function(x){
        this.$el.empty();
        var self = this;

        this.collection.each( function (x) {
          self.$el.append(self.template(x.toJSON()));
        });

      }


  })
}());