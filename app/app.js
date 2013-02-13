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
  ]
});