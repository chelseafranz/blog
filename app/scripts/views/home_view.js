(function  () {
App.Views.homeView = Parse.View.extend({


	template: $('#homeTemp').html(),

	initialize: function(){
		console.log('home');
	},
	render:function(){

        this.$el.html(this.template);
      }




});
}());