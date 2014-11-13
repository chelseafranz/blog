(function (){

App.Views.singlePost = Parse.View.extend({

	events: {
		'submit #createPostButton':'createPost'
	},

	template: $('#blogPost').html(),

	initialize: function (){
		this.render();

	},

	template: $('#blogPost').html(),
	render: function(){
		this.$el.html(this.template);
	},

	addPost: function (a) {
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
          App.router.navigate('welcome', { trigger: true });
        }
      });

    }

});


}());
