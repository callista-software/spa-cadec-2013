Cadec.Collections.Cart = Backbone.Collection.extend({

  	model : Cadec.Models.CartModel,
  	url : '/cart',

    initialize: function() {
    	console.log("Cart collection init");
    }

});
