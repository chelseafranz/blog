(function (){
	App.Views.tagsView= Parse.View.extend({

		events: {
			'submit #sortByForm' : 'sortBy'

		},

		template: $('#tagsTemp').html(),

		initialize: function(){
			console.log('sort by tags');
			$('#welcomePage').empty();
			$('#blogPost').empty();
			$('#blogList').empty();
			$('#welcomePage').empty();
			$('#startPage').empty();

			this.render();

			$('#tags').html(this.$el);
		},

		render: function(){
			this.$el.html(this.template);
		},

		sortBy: function(e){
			e.preventDefault();
			
			},

	})

}());