Parse.initialize("WrDfLsxuougObGc7QHG1HAbWvDZG694tdg8gVQuS", "rMzyC9RkZOw29M69bLXSjz5feWM8TVVUuvgaPHM0");

(function(){

      App.user = Parse.User.current();

      App.users = new App.Collections.Users();

      App.users.fetch().done(function(){

        App.router = new App.Routers.AppRouter();
        
        Parse.history.start();
      });



}());
