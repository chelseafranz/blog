(function (){

  App.Routers.AppRouter = Parse.Router.extend({

    routes: {
      '': 'home',
      'create': 'createUser',
    },

    home: function(){


    },
    createUser: function (newUser){
      new App.Views.createUser();

    },
  })
}());
