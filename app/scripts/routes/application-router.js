Cadec.Routers.ApplicationRouter = Backbone.Router.extend({

	routes : {
    	'' : 'listProducts',
    	'products/:id' : 'viewProduct'
  	},

	initialize : function() {
		console.log('Router initialized...');
	},

	listProducts : function () {
		var products = new Cadec.Collections.ProductCollection();
		products.fetch({
			success : function() {
				new Cadec.Views.ProductsView({
					collection : products
				});
			},
			error : function() {
				console.log('failed to fetch products');
			}
		});
	},

	viewProduct : function(id) {
		var self = this, product;
		console.log('View product %s', id);

		product = new Cadec.Models.ProductModel({
			id : id
		});

		product.fetch({
			success : function() {
				new Cadec.Views.ProductDetailView({
					model : product
				});
			},
			error : function() {
				console.log('Err');
			}
		});
	}
});
