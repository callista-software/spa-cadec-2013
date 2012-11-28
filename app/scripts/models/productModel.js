ydemoe.Models.ProductModel = Backbone.Model.extend({

	defaults : {
		'id'          : '',
		'name'        : '',
		'description' : '',
		'inStock'     : '0'
	},

	initialize : function (options) {
		console.log('product init');
		this.specialProp = options.specialProp;
	}
});
