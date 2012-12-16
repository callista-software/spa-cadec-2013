Cadec.Routers.ApplicationRouter = Backbone.Router.extend({

	routes : {
    '' : 'listProducts'
  },

	initialize : function() {
		var products;
		console.log('router init');
		
		Cadec.globalCart = new Cadec.Collections.Cart();
		new Cadec.Views.CartView({
			collection : Cadec.globalCart
		});

		products = new Cadec.Collections.ProductCollection();
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

	listProducts : function () {
		console.log('list products');
	}
});
