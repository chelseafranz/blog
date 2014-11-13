(function (){

	App.Views.welcomeView = Parse.View.extend({

		// events: {
		// 	'submit #createPostButton': 'createPost'
		//
		// },

		template: $('#welcomeTemp').html(),

		initialize: function(){
			$('#loginForm').empty();
			console.log('welcome page');
			this.render();
			$('#welcomePage').html(this.$el);
		},

		render: function(){
			this.$el.html(this.template)
		},

		// createPost: function(e){
		// 	e.preventDefault();
		// 	console.log('create');
		// 	var c = new App.Models.blogPost({
		// 		title: $('#blogTitle').val(),
		// 		// author: username,
		// 		content: $('#content'),
		// 		tags: $('#tags')
		// 	});
		//
		// 	c.save(null, {
		// 		success: function ( ){
		// 			App.allblogposts.add(c);
		// 			App.router.navigate('welcome', {trigger: true});
		// 		}
		// 	});
		// 	console.log(content);
		// }



	});

}());
