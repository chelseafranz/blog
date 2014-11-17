(function (){
	App.Views.editBlogPostView = Parse.View.extend({

		events: {

		'submit #editBlogpostForm' : 'editPost',
		'submit #addComment' : 'addComment',
>>>>>>> victoriablog

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
