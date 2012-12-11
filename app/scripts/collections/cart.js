Cadec.Collections.Cart = Backbone.Collection.extend({

  model : Cadec.Models.CartModel,
  url : '/cart',

  addToCart : function (newItem) {
  	var self = this, found;
    var product = newItem.get('product');

    product.set('inStock', product.get('inStock') - 1);

  	found = _.any(this.models, function(cartItem) {
  		if (cartItem.get('product').id == product.id) {
  			cartItem.set('count', cartItem.get('count') + 1);

        //var p = cartItem.get('product');
        //p.set('inStock', p.get('inStock') - 1);
  			return true;
  		}
  	});

  	if (!found) {
      //var cartItem = new Cadec.Models.CartModel(product);
      //var p = cartItem.get('product');
      //p.set('inStock', p.get('inStock') - 1);
  		this.add(newItem);
  	}
  },

  decCart : function (cartItem) {
    var count = cartItem.get('count');
    if (count > 0) {
      cartItem.set('count', count - 1);

      var product = cartItem.get('product');
      product.set('inStock', product.get('inStock') + 1);
    }
  }

});
