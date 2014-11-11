(function (){

  App.Routers.AppRouter = Parse.Router.extend({

    routes: {
      '': 'home',
      'create': 'createUser',
      'login': 'loginUser',
    },

    home: function(){


    },
    createUser: function (newUser){
      new App.Views.createUser();

    },

    userLogin: function (loginUser){
      new App.Views.LoginUser();
    },
  })
}());
