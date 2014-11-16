(function (){
	App.Views.editBlogPostView = Parse.View.extend({

		events: {
		'submit #editBlogPostForm' : 'editPost',

		},

		template: _.template($('#editPostTemp').html()) ,

		initialize: function(options){
			this.options=options;
			console.log(this.options.blogPost);
			console.log('on edit post page');
			this.render();

			$('#blogPost').html(this.$el);

		},

		render: function (){
		this.$el.empty();
		$('#blogList').empty();
		this.$el.html(this.template((this.options.blogPost).toJSON()));
		},

		editPost: function(e){
			e.preventDefault();
			console.log('start edit');

			this.options.blogPost.set({
				title: $('#updateblogTitle').val(),
				content:$('#updatecontent').val(),
				tags: $('#updateblogTags').val()
			});

			this.options.blogPost.save(null,{
				success: function(){
					console.log('successfully updated');
					App.router.navigate('welcomeView', {trigger: true});
					
				}
				})
			
		}

	});

}());
