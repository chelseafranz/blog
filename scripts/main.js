// (function (){
//
//   App.Models.User = Parse.Object.extend({
//
//     className: 'user',
//     idAttribute: 'objectId',
//
//     defaults: {
//       userName:'',
//       email: '',
//       password: '',
//       firstName: ''
//
//
//     },
//
//     initialize: function () {
//
//       var n = this.get('userName')
//       console.log(userName + "has been created");
//     }
//   })
// }());

(function(){
	App.Models.blogPost= Parse.Object.extend({
		className: 'blogPost',
		idAttribute: 'objectId',

		defaults: {
			title: '',
			author: '',
			tags: '',
			content: ''
		},
		template: $('#blogPost').html(),

		initialize: function(){
		},

	})

}());


(function () {

  App.Collections.Users = Parse.Collection.extend({
    model: Parse.User,

  });

}());

(function(){
	App.Collections.allBlogPosts = Parse.Collection.extend({

		model: App.Models.blogPost,

	})

}());

(function (){


  App.Views.loginUser = Parse.View.extend ({
    id: 'loginForm',


    events: {
      'click .loginButton': 'loginUser'
    },

    template:$('#loginTemp').html(),

    initialize: function (){
      $('.startPage').empty();
      this.render();
      $('#loginForm').html(this.$el);
    },

    render: function(){
      this.$el.html(this.template);
    },

    loginUser: function(a){
      a.preventDefault();

      var username = $('#userName').val();
      var password = $('#password').val();


      Parse.User.logIn(username, password, {
        success: function (user) {
          //App.user = user;
          console.log(username);

          // App.updateUser();
          App.router.navigate('welcomeView', {trigger: true});
          console.log('login successful');
        },
        error: function (user, error) {
          alert("Error: " + error.message);
          App.router.navigate('loginView', {trigger: true});
    }

    });

    }

  });
}());

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

        this.$el.html(this.template);
      },

});
}());

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

(function  () {


    App.Views.createUser = Parse.View.extend({
      className: 'createUser',
      idAttribute: 'objectId',

      events: {
        'submit #newUserForm': 'createUser'
      },

      template:$('#createNewTemp').html(),

      initialize: function (){
        $('.login').empty();
        this.render();
        $('#createUserForm').html(this.$el);
      },

      render: function(){

        this.$el.html(this.template);
      },

      createUser: function(a){
        a.preventDefault();


        var user = new Parse.User({
          username: $('#userName').val(),
          password: $('#password').val()
          // email: $('#email').val(),
          // name: $('#firstName').val()
        });


        user.signUp(null, {
          success: function(user){
            console.log('success');
          App.router.navigate('', {trigger:true});

          },
          error: function (user, error) {
            alert("Fail. " + error.message);
          }
        });
        App.router.navigate('', {trigger:true});

          },


});
}());

(function (){

App.Views.singlePost = Parse.View.extend({

	events: {
		'submit #createBlogPostForm': 'createPost'

	},

	initialize: function (){
		$('#welcomePage').empty();
		this.render();
		$('#blogPost').html(this.$el);

	},

	render: function(){
		this.$el.html($('#postTemp').html());
	},



	createPost: function (a) {
      a.preventDefault();

      var p = new App.Models.blogPost({
        title: $('#blogTitle').val(),
        content: $('#content').val(),
				tags: $('#blogTags').val(),
        user: App.user
      });

			p.setACL(new Parse.ACL(App.user));

			p.save(null, {
        success: function () {
          App.allBlogPosts.add(p);
          $('#createBlogPostForm').empty();
          App.router.navigate('welcomeView', { trigger: true });
        }
      });

    }

});


}());

(function (){

  App.Views.blogPostsView = Parse.View.extend({

      tagName: 'ul',
      className: 'blogList',

      template: $('#allBlogPosts').html(),

      initialize: function (options) {
        $('#welcomePage').empty();

        this.render();
        $('#blogList').html(this.$el);

        this.options = options;

        console.log(this.collection);
        this.collection.off();
        this.collection.on('sync', this.blogQuery, this);


         // this.blogQuery();

      },

       blogQuery: function () {

        this.blogQuery();
      },

      render: function(){
        this.$el.html(this.template)
      },

      blogQuery: function () {


         var self = this;


       var blog_writer = new Parse.Query(App.Models.blogPost);
       blog_writer.equalTo('user', App.user);
       blog_writer.find({

      var blog_author = new Parse.Query(App.Models.blogPost);
      blog_author.equalTo('user', App.user);
      blog_author.find({

        success: function (results) {
           self.collection = results;
           console.log(App.Models.blogPost);
          self.render();
         }
       });

       }
  })
}());

(function (){

  App.Routers.AppRouter = Parse.Router.extend({

    routes: {
      '': 'homeView',
      'create': 'createUser',
      'loginUser': 'loginUser',
      'welcomeView': 'welcomeView',
      'singlePost': 'postView',
      'blogPosts': 'blogPosts'

    },

    homeView: function(){
    new App.Views.homeView();


    },
    createUser: function (newUser){

      new App.Views.createUser();

    },

    userLogin: function (loginUser){
      new App.Views.loginUser();
    },

    loginUser: function (user){
      new App.Views.loginUser();
    },

    welcomeView: function(){
      new App.Views.welcomeView();
    },

    postView: function(){
      new App.Views.singlePost();
    },

    blogPosts: function(){
      new App.Views.blogPostsView({ collection: App.allBlogPosts });
    }

  })
}());

Parse.initialize("WrDfLsxuougObGc7QHG1HAbWvDZG694tdg8gVQuS", "rMzyC9RkZOw29M69bLXSjz5feWM8TVVUuvgaPHM0");

(function(){

      App.user = Parse.User.current();

      App.users = new App.Collections.Users();

      App.allBlogPosts = new App.Collections.allBlogPosts();

      App.allBlogPosts.fetch().done(function(){

        App.router = new App.Routers.AppRouter();

        Parse.history.start();
      });

      $('#logOut').on('click', function(e){
      	e.preventDefault();
      	Parse.User.logOut();
      	App.updateUser();
      	App.router.navigate('', {trigger:true});
      });

      // App.updateUser = function(e){
      // 	e.preventDefault();
      // 	App.user = Parse.User.current();
      // 	var currentUser;
      // 	if (App.user == null){
      // 		currentUser = '';
      // 		$('#logOut').text('login');
      // 	} else{
      // 		currentUser = 'Welcome' + App.user.attributes.username;$('#logOut').text('Log out');
      // 	}
      // 	$('#loggedIn').html(currentUser);
      // };
      // App.updateUser();

}());
