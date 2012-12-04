Cadec.Models.ProductModel = Backbone.Model.extend({

	defaults : {
		'id'          : '',
		'name'        : '',
		'description' : '',
		'inStock'     : '0',
		'imgSrc'      : 'http://placehold.it/200x150'
	},

	initialize : function (options) {
		console.log('product init');
		this.specialProp = options.specialProp;
	}
});
