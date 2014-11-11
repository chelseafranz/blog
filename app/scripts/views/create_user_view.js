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
           success: function(user){
             console.log('success');

           },
           error: function (user, error) {
             console.log("couldn't succeed because" + error.message);
           }
         })

          },


});
}());
