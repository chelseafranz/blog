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
