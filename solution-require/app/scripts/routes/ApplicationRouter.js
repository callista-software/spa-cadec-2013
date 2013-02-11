define([
  'jquery',
  'underscore',
  'backbone',
  'collections/CartCollection', 
  'views/CartView', 
  'collections/ProductCollection',
  'views/ProductsView',
  'views/ProductDetailView'
], function ( $, _, Backbone, CartCollection, CartView, 
  ProductCollection, ProductsView, ProductDetailView ) {

  var ApplicationRouter = Backbone.Router.extend({

    routes : {
      'products' : 'listProducts',
      'products/:id' : 'viewProduct'
    },

    initialize : function( options ) {
      console.log('Application Router initialized...');
  
      var self = this;

      this.Cadec = options.app;
      this.Cadec.globalCart = new CartCollection();
      
      new CartView({
        collection : this.Cadec.globalCart, 
        app : this.Cadec
      });

      this.products = new ProductCollection();
      this.products.fetch({
        async : false,
        success : function() {
            self.listProducts();
        }
      });

    },
    
    listProducts : function () {
      if (this.products) {
        new ProductsView({
          collection : this.products
        });
      }
    },

    viewProduct : function( id ) {
      var self = this;

      console.log('View product %s', id);
      this.products.any(function(product) {
        if (product.get('id') == id) {

          if (self.Cadec.currentDetailView) {
            self.Cadec.currentDetailView.remove();
          }

          self.Cadec.currentDetailView = new ProductDetailView({
            model : product,
            app : self.Cadec
          });
          // stop looping
          return true;
        }
      });
    }
  });

  return ApplicationRouter;
});