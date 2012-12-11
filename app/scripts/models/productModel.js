Cadec.Models.ProductModel = Backbone.Model.extend({

	urlRoot : '/api/products',

	defaults : {
		'id'          : '',
		'name'        : '',
		'description' : '',
		'inStock'     : '0',
		'imgSrc'      : '128x128.png'
	},

	initialize : function (options) {
		console.log('product init');
		this.specialProp = options.specialProp;
	}
});
