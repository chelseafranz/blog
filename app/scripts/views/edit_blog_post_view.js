(function (){
	App.Views.editBlogPostView = Parse.View.extend({

		events: {
		'submit #editPost' : 'editPost',

		},

		template: _.template($('#editPostTemp').html()),

		initialize: function(){
			$('#welcomePage').empty();
			console.log('edit post');
			//this.collection.on('sync', this.blogQuery, this);
			this.render();

			$('#blogPost').html(this.$el);

					},

		render: function (){

			console.log('render');
			var self= this;
			this.collection.each( function (x) {
          self.$el.append(self.template(x.toJSON()));
        });

		},

		editPost: function(e){
			e.preventDefault();
			console.log('edit');

			this.options.singlePost.set({
				title: $('#blogTitle').val(),
				content:$('#content').val(),
				tags: $('#blogTags').val()
			});
		}

	});

}());
