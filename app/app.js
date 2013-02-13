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


Ember.Handlebars.registerBoundHelper('boomness', function(value, options) {
  return new Handlebars.SafeString('<span>' + value + " is the boomness" + '</span>');
});

Kitana.Router.map(function(){
  this.route("index", {path: "/"});
  this.route("anotherplace", {path: "/kit/"});
});

Kitana.IndexRoute = Ember.Route.extend({
  redirect: function(){
    this.transitionTo('anotherplace')
  },
  renderTemplate: function(){
    this.render('mainTemplate');
  }
});

Kitana.AnotherplaceRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('myvar', 'Coooool!');
  },
  renderTemplate: function(){
    this.render('anotherTemplate');
  }
})