(function (){

  App.Routers.AppRouter = Parse.Router.extend({

    routes: {
      '': 'homeView',
      'create': 'createUser',
      'loginUser': 'loginUser'
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
    }
  })
}());
