(function (){

  App.Models.User = Parse.Object.extend({

    className: 'user',
    idAttribute: 'objectId',

    defaults: {
      userName:'',
      email: '',
      password: '',
      firstName: ''


    },

    initialize: function () {

      var n = this.get('userName')
      console.log(userName + "has been created");
    }
  })
}());


(function () {

  App.Collections.Users = Parse.Collection.extend({
    model: App.Models.User,

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
          password: $('#password').val(),
          email: $('#email').val(),
          name: $('#firstName').val()
        });


         user.signUp(null, {
           
      success: function (){
       App.router.navigate('', {trigger: true});
      }
      });
      $('#creatUserForm')[0].reset();
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

  App.Routers.AppRouter = Parse.Router.extend({

    routes: {
      '': 'home',
      'create': 'createUser',
      'login': 'loginUser',
    },

    home: function(){
      $('createUserForm').empty();
      $('loginForm').empty();

    },
    createUser: function (newUser){
      new App.Views.createUser();

    },

    userLogin: function (loginUser){
      new App.Views.LoginUser();
    },
  })
}());

Parse.initialize("WrDfLsxuougObGc7QHG1HAbWvDZG694tdg8gVQuS", "rMzyC9RkZOw29M69bLXSjz5feWM8TVVUuvgaPHM0");

(function(){

      App.user = Parse.User.current();

      App.users = new App.Collections.Users();

      App.users.fetch().done(function(){

        App.router = new App.Routers.AppRouter();
        
        Parse.history.start();
      });



}());
