Cadec.Models.CartModel = Backbone.Model.extend({

	defaults : {
		id : '',
		count : 1
	},
	
	initialize : function (options) {
		console.log('cartitem init');
		this.id = this.get('product').id;
	}
});
