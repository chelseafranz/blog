(function (){

  App.Routers.AppRouter = Parse.Router.extend({

    routes: {
      '': 'homeView',
      'create': 'createUser',
      'loginUser': 'loginUser',
      'welcomeView': 'welcomeView',
      'singlePost': 'createPost'

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
    createPost: function(){
      new App.Views.singlePost();
    }
    // addNewBar: function(AddBar){
    //   var c = App.Bars.get(addBar);
    //   new App.Views.AddBar({ bar: c});
    // }

  })
}());
