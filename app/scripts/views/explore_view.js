(function(){

	App.Views.exploreView= Parse.View.extend({
		
    events:{
      'submit #explore' : 'exploreByTags'
    },

	template: $('#explore').html(),

      initialize: function (options) {
        console.log('explore page');
        this.render();
        $('#blogPost').html(this.$el);

      
      },

      render: function(){
       this.$el.html(this.template)
       
      },

      exploreByTags: function(){
     query=  new Parse.Query(App.Models.blogPost);
        var tag= $('#exploreSearch').val();
      query.contains('tags', tag);
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

      }
      


  })
}());