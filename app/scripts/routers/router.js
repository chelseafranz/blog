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
      new App.Views.blogPostsView();
    }

  })
}());
