(function (){

  App.Models.User = Parse.Models.extend({

    className: 'user',
    idAttribute: 'objectId',

    defaults {


    },

    initialize: function () {
      console.log('new user created');
    }
  })
}());

(function  () {
App.Views.createUser = Parse.View.extend({








});
}());
Parse.initialize("WrDfLsxuougObGc7QHG1HAbWvDZG694tdg8gVQuS", "rMzyC9RkZOw29M69bLXSjz5feWM8TVVUuvgaPHM0");
(function(){

App.user = Parse.User.current()

}());
