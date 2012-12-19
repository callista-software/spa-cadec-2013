cadec.Models.ProductModel = Backbone.Model.extend({

	urlRoot: '/products',

	defaults : {
		'id'          : '',
		'name'        : '',
		'description' : '',
		'inStock'     : '0',
		'imgSrc'      : '128x128.png'
	},

	initialize : function (options) {
		console.log('product init');
		this.bind("error", function(model, error){
        	console.log(error);
        });
	},
	
	validate: function( attributes ){
		if( attributes.name === 'Pear' ){
        	return 'Pear? Noooo!';
		}
	}
});
