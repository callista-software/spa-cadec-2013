Cadec.Routers.ApplicationRouter = Backbone.Router.extend({
    initialize : function() {
        console.log('Application Router initialized...');
        this.listProducts();
    },

    listProducts : function () {
        console.log('list products');
        var products = new Cadec.Collections.ProductCollection();
        products.fetch({
            success : function() {
                console.log('Succeeded in fetching products');
                new Cadec.Views.ProductsView({
                    collection : products
                });
            },
            error : function() {
                console.log('Failed to fetch products');
            }
        });
    }
});