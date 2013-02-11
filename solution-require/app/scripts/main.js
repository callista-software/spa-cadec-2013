require([
  'backbone',
  'routes/ApplicationRouter'
], function ( Backbone, Router ) {

  console.log('Init application...');
  // create an app object
  var Cadec = {};

  // create the router
  new Router({
    app: Cadec
  });
  // init application
  Backbone.history.start();

});