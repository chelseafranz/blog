(function (){
	App.Views.editBlogPostView = Parse.View.extend({

		events: {
		'submit #editBlogpostForm' : 'editPost',
		'submit #addComment' : 'addComment',

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

		var commentTemplate =_.template($('#commentTemplate').html());
		var comments_query = new Parse.Query(App.Models.Comment);
		comments_query.equalTo('parent',this.options.blogPost);

		this.$el.append('<h3>Comments<h3><ul class="comments"></ul>');

		comments_query.find({
			success: function(results){
				_.each(results, function(comment) {
					$('ul.comments').append(commentTemplate(comment.toJSON()));
				})
			}
		})
		},

		addComment: function(a) {
			a.preventDefault();

			var comment = new App.Models.Comment({
				commentText: $('#commentText').val(),
				parent: this.options.blogPost
			});

			comment.save(null, {
				success: function (){
					console.log('commet');
					App.router.navigate('', {trigger: true});
				}
			});

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
