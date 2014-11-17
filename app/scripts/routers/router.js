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
