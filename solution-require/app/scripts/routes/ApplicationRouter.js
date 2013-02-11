define([
  'jquery',
  'underscore',
  'backbone',
  'app', 
  'collections/ProductCollection',
  'views/ProductsView',
  'views/ProductDetailView'
], function ( $, _, Backbone, Cadec, ProductCollection, ProductsView, ProductDetailView ) {

  var ApplicationRouter = Backbone.Router.extend({

    routes : {
      'products' : 'listProducts',
      'products/:id' : 'viewProduct'
    },

    initialize : function( options ) {
      console.log('Application Router initialized...');
      var self = this;

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
      console.log('View product %s', id);

      this.products.any(function(product) {
        if (product.get('id') == id) {

          if (Cadec.currentDetailView) {
            Cadec.currentDetailView.remove();
          }

          Cadec.currentDetailView = new ProductDetailView({
            model : product
          });
          // stop looping
          return true;
        }
      });
    }
  });

  return ApplicationRouter;
});