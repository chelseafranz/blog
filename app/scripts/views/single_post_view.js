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
		this.$el.empty();
		this.$el.html($('#postTemp').html());

	},



	createPost: function (a) {
      a.preventDefault();

      var p = new App.Models.blogPost({
        title: $('#blogTitle').val(),
        content: $('#content').val(),
		tags: $('#blogTags').val(),
        author: App.user.attributes.username,
      });

			p.setACL(new Parse.ACL(App.user));

			p.save(null, {
        success: function () {
          App.allBlogPosts.add(p);

          App.router.navigate('welcomeView', { trigger: true });
        }
      });

    }

});


}());
