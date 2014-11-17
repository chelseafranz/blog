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

		defaults: {
			title: '',
			author: '',
			tags: '',

			content: '',
			user: App.user,
		}
	})

}());

(function () {

  App.Models.Comment = Parse.Object.extend({

    className: 'Comment',

    defaults: {
      commentText: ''
    }

  });


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
      this.$el.empty();
      this.$el.html(this.template);
    },

    loginUser: function(a){
      a.preventDefault();

      var username = $('#userName').val();
      var password = $('#password').val();


      Parse.User.logIn(username, password, {
        success: function (user) {
       
          console.log(username);

         
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

(function (){
	App.Views.editBlogPostView = Parse.View.extend({

		events: {

		'submit #editBlogPostForm' : 'editPost',
		'submit #addComment' : 'addComment',


		},

		template: _.template($('#editPostTemp').html()) ,

		initialize: function(options){
			this.options=options;
			console.log(this.options.blogPost);
			console.log('on edit post page');
			this.render();

			$('#blogPost').html(this.$el);

		},

		render: function (){

		this.$el.empty();
		$('#blogList').empty();
		var temp = (this.options.blogPost).toJSON()
		var hyper = this.template(temp)
		this.$el.html(hyper);
		//this.$el.html(this.template);

		var commentTemplate =_.template($('#commentTemplate').html());
		var comments_query = new Parse.Query(App.Models.Comment);
		comments_query.equalTo('parent',this.options.blogPost);

		this.$el.append('<h3>Comments<h3><ul class="comments"></ul>');

		comments_query.find({
			success: function(results){
				_.each(results, function(comment) {
					$('ul.comments').append(commentTemplate(comment.toJSON()));
				})
			}
		})
		},

		addComment: function(a) {
			a.preventDefault();

			var comment = new App.Models.Comment({
				commentText: $('#commentText').val(),
				parent: this.options.blogPost
			});

			comment.save(null, {
				success: function (){
					console.log('commet');
					App.router.navigate('welcomeView', { trigger: true });
				}
			});


		},

		editPost: function(e){
			e.preventDefault();
			console.log('start edit');

			this.options.blogPost.set({
				title: $('#updateblogTitle').val(),
				content:$('#updatecontent').val(),
				tags: $('#updateblogTags').val()
			});

			this.options.blogPost.save(null,{
				success: function(){
					console.log('successfully updated');
					App.router.navigate('welcomeView', {trigger: true});

				}
				})

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
		$('#newUserForm').empty();
		this.$el.empty();
        this.$el.html(this.template);
      },

});
}());

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
        this.$el.empty();
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
		this.$el.empty();
		this.$el.html($('#postTemp').html());

	},



	createPost: function (a) {
      a.preventDefault();

      var p = new App.Models.blogPost({
        title: $('#blogTitle').val(),
        content: $('#content').val(),
		tags: $('#blogTags').val(),
        author: App.user.attributes.username,
      });

			p.setACL(new Parse.ACL(App.user));

			p.save(null, {
        success: function () {
          App.allBlogPosts.add(p);

          App.router.navigate('welcomeView', { trigger: true });
        }
      });

    }

});


}());

(function(){

	App.Views.exploreView= Parse.View.extend({
		
    events:{
      'submit #explore' : 'exploreByTags'
    },

	template: $('#explore').html(),

      initialize: function (options) {
        console.log('explore page');
        this.render();
        $('#blogPost').html(this.$el);

      
      },

      render: function(){
      this.$el.empty();
       this.$el.html(this.template)
       
      },

      exploreByTags: function(){

     query=  new Parse.Query(App.Models.blogPost);
        var tag= $('#exploreSearch').val();
      query.contains('tags', tag);
      query.find({
        success: function(results) {
          console.log("Successfully retrieved " + results.length + " post.");
        for (var i = 0; i < results.length; i++) { 
          var object = results[i];
          console.log(object.id + ' - ' + object.get('App.user.attributes.username'));
          }
          },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
          });

      }
      


  })
}());
(function (){

  App.Views.blogPostsView = Parse.View.extend({

      el: '#blogList',

      template: _.template($('#allBlogPosts').html()),

      initialize: function (options) {
          this.options= options;
        $('#welcomePage').empty();
        this.collection.on('sync', this.blogQuery, this);
        this.render();

      query=  new Parse.Query(App.Models.blogPost);
      query.contains('tags', 'tags');
      query.find({
        success: function(results) {
          console.log("Successfully retrieved " + results.length + " post.");
        for (var i = 0; i < results.length; i++) { 
          var object = results[i];
          console.log(object.id + ' - ' + object.get('App.user.attributes.username'));
          }
          },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
  }
});

      },

      render: function(){
        this.$el.empty();
        var self = this;

        this.collection.each( function (x) {
          self.$el.append(self.template(x.toJSON()));
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
      'blogPosts': 'blogPosts',
      'edit/:id': 'editBlogPost',
      'logOut': 'logout',

      'explore': 'explore'


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
    },

    editBlogPost: function  (id){
      var b = App.allBlogPosts.get(id);

     new App.Views.editBlogPostView({ blogPost: b });
    },


    explore: function(){
      new App.Views.exploreView();
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

        var query;
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
