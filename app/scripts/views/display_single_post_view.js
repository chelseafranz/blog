(function(){

	App.Views.displaySinglePost = Parse.View.extend({
		 
		 template: $('#onePostTemp').html(),

		 initialize: function(){
		 	$('#blogList').empty();
		 	this.render();
		 	$('#singlePost').html(this.$el);
		 },

		 render: function(){
		 this.$el.html(this.template)
		}

	})
}());