(function(){
	App.Models.blogPost= Parse.Object.extend({
		className: 'blogPost',
		// idAttribute: 'objectId',

		defaults: {
			title: '',
			author: '',
			tags: '',
			content: ''
		},
		// template: $('#blogPost').html(),
		//
		 initialize: function(){
		 },

	})

}());
