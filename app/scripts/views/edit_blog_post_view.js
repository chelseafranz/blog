(function (){
	App.Views.editBlogPostView = Parse.View.extend({

		events: {
		'submit #editBlogpostForm' : 'editPost',

		},

		template: $('#editPostTemp').html(),

		initialize: function(){
			$('#welcomePage').empty();
			console.log('edit post');

			this.render();

			$('#blogPost').html(this.$el);

		},

		render: function (){
		this.$el.html(this.template);
		},

		editPost: function(e){
			e.preventDefault();
			console.log('edit');

			this.options.blogPost.set({
				title: $('#blogTitle').val(),
				content:$('#content').val(),
				tags: $('#blogTags').val()
			});
		}

	});

}());
