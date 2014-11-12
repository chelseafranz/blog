(function  () {
App.Views.homeView = Parse.View.extend({
	className: 'home',

	events: {
		'submit #loginUserPage': 'loginUser'

	},

	template: $('#homeTemp').html(),

	initialize: function(){
		console.log('home');
		this.render();
		$('.hero-unit').html(this.$el);

	},

	render:function(){

        this.$el.html(this.template);
      },

      loginUser: function(){
      	App.Views.loginUser;

      }




});
}());