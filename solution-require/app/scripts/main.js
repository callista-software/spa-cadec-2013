require([
  'backbone',
  'routes/ApplicationRouter', 
  'app',
  'collections/CartCollection', 
  'views/CartView'
], function ( Backbone, Router, Cadec, CartCollection, CartView ) {

  console.log('Init application...');
  // create a Cart in the Cadec app object
  Cadec.globalCart = new CartCollection();
  
  new CartView({
    collection : Cadec.globalCart
  });

  // create the router
  new Router();
  // init application
  Backbone.history.start();

});