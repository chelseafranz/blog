(function (){


  App.Views.loginUser = Parse.View.extend ({
    id: 'loginForm',


    events: {
      'submit #enterButton': 'loginUser'
    },

    template:$('#loginTemp').html(),

    initialize: function (){
      $('.createUser').empty();
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
          //App.user = user;

          App.updateUser ();
          App.router.navigate('', {trigger: true});
          console.log('login successful');
        },
        error: function (user, error) {
          alert("Error: " + error.message);
    }

    });

    }

  });
}());
