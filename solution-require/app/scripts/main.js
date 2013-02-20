require([
  'backbone',
  'routes/ApplicationRouter', 
  'app',
  'views/CartView'
], function ( Backbone, Router, Cadec, CartView ) {

  console.log('Init application...');
  // create a Cart view with the Cart in the Cadec app object
  new CartView({
    collection : Cadec.globalCart
  });

  // create the router
  new Router();
  // init application
  Backbone.history.start();

});