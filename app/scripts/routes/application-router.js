ydemoe.Routers.ApplicationRouter = Backbone.Router.extend({

	routes : {
    '' : 'listProducts'
  },

	initialize : function() {
		var products;
		console.log('router init');
		
		ydemoe.globalCart = new ydemoe.Collections.Cart();
		new ydemoe.Views.CartView();

		products = new ydemoe.Collections.ProductCollection();
		products.fetch({
			success : function() {
				new ydemoe.Views.ProductsView({
					model : products
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
