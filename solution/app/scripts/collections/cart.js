Cadec.Collections.Cart = Backbone.Collection.extend({

  model : Cadec.Models.CartModel,
  url : '/cart',

  addToCart : function (newItem) {
  	var self = this, found, product;
    
    product = newItem.product;
    product.set('inStock', product.get('inStock') - 1);

  	found = this.any(function(cartItem) {
  		if (cartItem.product.id == product.id) {
  			cartItem.set('count', cartItem.get('count') + 1);

  			return true;
  		}
  	});

  	if (!found) {
  		this.add(newItem);
  	}
  },

  removeFromCart : function (cartItem) {
    var count = cartItem.get('count'), product;
    if (count > 0) {
      cartItem.set('count', count - 1);

      product = cartItem.product;
      product.set('inStock', product.get('inStock') + 1);
    }
  }, 

  parse : function (response) {
    return response;
  }

});
