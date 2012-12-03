ydemoe.Collections.Cart = Backbone.Collection.extend({

  model : ydemoe.Models.CartModel,
  url : '/cart',

  addToCart : function (product) {
  	var self = this, found;
  	product.set('inStock', product.get('inStock')-1);
  	found = _.any(this.models, function(cartItem) {
  		if (cartItem.id == product.id) {
  			//console.log('Increase cart item id: %s with name %s', cartItem.id, cartItem.name);
  			cartItem.set('count',cartItem.get('count')+1);
  			return true;
  		}
  	});
  	if (!found) {
//  		product.set('count', 1);
  		this.models.push(new ydemoe.Models.CartModel(product));
  	}
  	//this.trigger('change');
  }

});
