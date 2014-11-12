(function (){


  App.Views.loginUser = Parse.View.extend ({
    className: 'loginUser',
    idAttribute: 'objectId',

    events: {
      'submit #userloginForm': 'loginUser'
    },

    template:$('#loginTemp').html(),

    initialize: function (){
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
          App.router.navigate('', {trigger: true});
        },
        error: function (user, error) {
          alert("Error: " + error.message);
    }

    });

    }

  });
}());
