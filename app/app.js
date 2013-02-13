window.Kitana = Ember.Application.create();


Kitana.ApplicationController = Ember.Controller.extend({
  firstName: "Sumeet",
  people: [
    {
      firstName: 'John',
      lastName:  'Doe'
    },
    {
      firstName: 'Jane',
      lastName:  'Doe'
    }
  ],
  coolObject: {coolValue: 'Some value'},
  url: "http://www.google.com",
  hideAll: function(){
    $("body").hide();
  }
});


Kitana.Router.map(function() { 
  this.resource("posts", function(){
    this.route("post", {path: "/zzzz" });
  });
});


Ember.Handlebars.registerBoundHelper('boomness', function(value, options) {
  return new Handlebars.SafeString('<span>' + value + " is the boomness" + '</span>');
});



Kitana.Router.map(function(){
  this.route("anotherplace", {path: "/kit"});
});


Kitana.AnotherplaceRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('title', 'Coooool!');
    alert('You did something!');
  }
})