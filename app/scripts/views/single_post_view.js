(function (){

App.Views.singlePost = Parse.View.extend({

	template: $('#blogPost').html(),

	initialize: function (){
		this.render();

	},
	render: function(){
		this.$el.html(this.template);
	}
})


}());