(function  () {
App.Views.homeView = Parse.View.extend({
	className: 'home',

	events: {

	},

	template: $('#homeTemp').html(),

	initialize: function(){
		console.log('home');
		this.render();
		$('.startPage').html(this.$el);

	},

	render:function(){
		$('#newUserForm').empty();
		this.$el.empty();
        this.$el.html(this.template);
      },

});
}());
