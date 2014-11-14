(function(){
	App.Collections.allBlogPosts = Parse.Collection.extend({

		model: App.Models.blogPost,

	})

}());
