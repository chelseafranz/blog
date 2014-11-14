(function (){

	App.Views.welcomeView = Parse.View.extend({



		template: $('#welcomeTemp').html(),

		initialize: function(){
			$('#loginForm').empty();
			console.log('welcome page');
			this.render();
			$('#welcomePage').html(this.$el);
		},

		render: function(){
			this.$el.html(this.template)
		},

	});

}());
