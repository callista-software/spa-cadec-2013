ydemoe.Models.CartModel = ydemoe.Models.ProductModel.extend({

	defaults : {
		count : 1
	},
	
	initialize : function (options) {
		console.log('cartitem init');
		this.id = options.id;
		this.set('name', options.get('name'));
		this.set('description', options.get('description'));
	}
});
