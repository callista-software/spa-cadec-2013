require([
  'backbone',
  'routes/ApplicationRouter', 
  'app'
], function ( Backbone, Router, App ) {

  console.log('Init application...');
  // create an Cart object

  // create the router
  new Router();
  // init application
  Backbone.history.start();

});