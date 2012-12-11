Cadec.Collections.Cart = Backbone.Collection.extend({

  model : Cadec.Models.CartModel,
  url : '/api/cart',

  addToCart : function (product) {
  	var self = this, found;
  	product.set('inStock', product.get('inStock') - 1);
  	found = _.any(this.models, function(cartItem) {
  		if (cartItem.id == product.id) {
  			//console.log('Increase cart item id: %s with name %s', cartItem.id, cartItem.name);
  			cartItem.set('count', cartItem.get('count') + 1);
  			return true;
  		}
  	});
  	if (!found) {
  		this.add(new Cadec.Models.CartModel(product));
  	}
  },

  decCart : function (cartItem) {
    var count = cartItem.get('count');
    if (count > 0) {
      cartItem.set('count', count - 1);
      // behöver inc på original-produkten...
    }
  }

});
