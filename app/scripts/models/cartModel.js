Cadec.Models.CartModel = Backbone.Model.extend({

	defaults : {
		id : '',
		count : 1
	},
	
	initialize : function (options) {
		console.log('cartitem init');
		this.product = options.product; 
		// shortcuts to ease template rendering
		this.id = options.product.id;
    this.set('name', this.product.get('name'));		
	}
});
