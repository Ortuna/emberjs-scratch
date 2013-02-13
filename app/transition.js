window.Transaction = Ember.Application.create();

Transaction.Router.map(function(){
  this.route("firstPage", { path: "/first_page" });
  this.route("secondPage", { path: "/second_page" });
});


Transaction.IndexRoute = Ember.Route.extend({
  redirect: function(){ this.transitionTo('firstPage') }
});


Transaction.FirstPageRoute = Ember.Route.extend({
  renderTemplate: function(){ this.render('firstPage'); }
});

Transaction.SecondPageRoute = Ember.Route.extend({
  setupController: function(controller) {
    console.debug('in teh controller setup');
    controller.set('theName', 'My cool variable');
  },
  renderTemplate: function(){ this.render('secondPage'); }
});