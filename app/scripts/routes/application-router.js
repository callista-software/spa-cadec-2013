ydemoe.Routers.ApplicationRouter = Backbone.Router.extend({

	routes : {
    '' : 'listProducts'
  },

	initialize : function() {
		console.log('router init');

		var products = new ydemoe.Collections.ProductCollection();
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
