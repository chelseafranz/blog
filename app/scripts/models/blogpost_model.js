(function(){
	App.Models.blogPost= Parse.Object.extend({
		className: 'blogPost',
		idAttribute: 'objectId',

		defaults: {
			title: '',
			author: '',
			tags: '',
			content: ''
		},
		template: $('#blogPost').html(),

		initialize: function(){
			var a = this.get('title')
			console.log(a + "has been created");
			var self = this;
			this.render();
		},
		render: function(){
			this.$el.html(this.template);
		},


	})









}());
