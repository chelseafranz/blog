(function  () {


    App.Views.createUser = Parse.View.extend({
      className: 'createUser',
      idAttribute: 'objectId',

      events: {
        'submit #newUserForm': 'createUser'
      },

      template:$('#createNewTemp').html(),

      initialize: function (){
        $('.login').empty();
        this.render();
        $('#createUserForm').html(this.$el);
      },

      render: function(){
        this.$el.empty();
        this.$el.html(this.template);
      },

      createUser: function(a){
        a.preventDefault();


        var user = new Parse.User({
          username: $('#userName').val(),
          password: $('#password').val()
          // email: $('#email').val(),
          // name: $('#firstName').val()
        });


        user.signUp(null, {
          success: function(user){
            console.log('success');
          App.router.navigate('', {trigger:true});

          },
          error: function (user, error) {
            alert("Fail. " + error.message);
          }
        });
        App.router.navigate('', {trigger:true});

          },


});
}());
