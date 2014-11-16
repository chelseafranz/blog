(function(){
	App.Models.blogPost= Parse.Object.extend({
		className: 'blogPost',

		defaults: {
			title: '',
			author: '',
			tags: '',
			content: ''
		},


		 initialize: function(){
		 	console.log('new post added');
		 },

		
	})

}());
