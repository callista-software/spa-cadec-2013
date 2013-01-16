Cadec.Collections.Cart = Backbone.Collection.extend({

  	model : Cadec.Models.CartModel,
  	url : '/api/order',

    initialize: function() {
    	console.log("Cart collection init");
    },

    addToCart : function (newItem) {
        var self = this, found, product;

        product = newItem.product;
        // räkna ner produktens lager-räknare
        product.set('inStock', product.get('inStock') - 1);

        // om produkten redan finns i korgen ska vi bara öka räknaren
        // any loopar igenom listan tills callbacken returnerar true
        found = this.any(function(cartItem) {
          if (cartItem.product.id == product.id) {
            cartItem.set('count', cartItem.get('count') + 1);

            return true;
          }
        });

        if (!found) {
          // ny produkt, lägg till
          this.add(newItem);
        }
        console.log('Product %s added to cart', product.get('name'));
    },

    removeFromCart : function (cartItem) {
      var count = cartItem.get('count'), product;
      if (count > 0) {
        cartItem.set('count', count - 1);

        product = cartItem.product;
        product.set('inStock', product.get('inStock') + 1);
      }
    }

});
