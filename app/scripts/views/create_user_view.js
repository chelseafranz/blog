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

         user.set("userName", '');
         user.set("password", '');
         user.set("email", '');

         user.signUp(null, {
           success: function(user){
             console.log('success');

           },
         });

          },


});
}());
