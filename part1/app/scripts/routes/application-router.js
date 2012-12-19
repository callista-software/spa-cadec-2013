cadec.Routers.ApplicationRouter = Backbone.Router.extend({
    initialize : function() {
        console.log('Application Router initialized...');
    },

	routes : {
		'' : 'listProducts',
    },

    listProducts : function () {
		console.log('list products');
		products = new cadec.Collections.ProductCollection();
		products.fetch({
			success : function() {
				new cadec.Views.ProductsView({
					collection : products
				});
			},
			error : function() {
				console.log('failed to fetch products');
			}
		});
	}
});

