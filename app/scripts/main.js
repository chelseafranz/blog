Parse.initialize("WrDfLsxuougObGc7QHG1HAbWvDZG694tdg8gVQuS", "rMzyC9RkZOw29M69bLXSjz5feWM8TVVUuvgaPHM0");

(function(){

      App.user = Parse.User.current();

      App.users = new App.Collections.Users();
      App.allBlogPosts = new App.Collections.allBlogPosts();

      App.users.fetch().done(function(){

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
