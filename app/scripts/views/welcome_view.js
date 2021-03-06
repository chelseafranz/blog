(function (){

	App.Views.welcomeView = Parse.View.extend({

		events: {
			'click #logOut': 'logout'
		},

		template: $('#welcomeTemp').html(),

		initialize: function(){
			$('#loginForm').empty();
			$('#blogPost').empty();
			console.log('welcome page');
			 //console.log(App.user.attributes.username);
			this.render();
			$('#welcomePage').html(this.$el);


		},

		render: function(){
			$('#blogPost').empty();
			$('#blogList').empty();
			this.$el.html(this.template)
		},

		logout: function(){
			console.log('logout');
        Parse.User.logOut();
        App.user= null,

        App.router.navigate('', {trigger:true});
        $('#welcomePage').empty();
		}


	});

}());
