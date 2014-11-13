(function (){

App.Views.singlePost = Parse.View.extend({

	events: {
		'submit #createBlogPostForm': 'createPost'

	},

	initialize: function (){
		$('#welcomePage').empty();
		this.render();
		$('#blogPost').html(this.$el);

	},

	render: function(){
		this.$el.html($('#postTemp').html());
	},



	createPost: function (a) {
      a.preventDefault();
		
      var p = new App.Models.blogPost({
        title: $('#title').val(),
        content: $('#content').val(),
        user: App.user
      });

			p.setACL(new Parse.ACL(App.user));

			p.save(null, {
        success: function () {
					console.log('saved');
          App.allblogposts.add(p);
          App.router.navigate('welcomeView', { trigger: true });
        }
      });

    }

});


}());
