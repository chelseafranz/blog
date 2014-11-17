(function(){
	App.Models.blogPost= Parse.Object.extend({
		className: 'blogPost',

		defaults: {
			title: '',
			author: '',
			tags: '',
			content: '',
			user: App.user,
		},


		 initialize: function(){
		 	console.log('new post added');
		 },

		
	})

}());
