define([
  'collections/CartCollection'
], function ( CartCollection ) {
  // create a Cart in the Cadec app object
  var cartCollection = new CartCollection();

  // ett globalt objekt att dela inom applikationen 
  return {
    globalCart : cartCollection
  };
});