Cadec.Routers.ApplicationRouter = Backbone.Router.extend({
    initialize : function() {
        console.log('Application Router initialized...');
        this.listProducts();
        Cadec.globalCart = new Cadec.Collections.CartCollection();

        new Cadec.Views.CartView({
            collection : Cadec.globalCart
        });
    },

    listProducts : function () {
        var products = new Cadec.Collections.ProductCollection();
        console.log('list products');
        products.fetch({
            success : function() {
                new Cadec.Views.ProductsView({
                    collection : products
                });
            },
            error : function() {
                console.log('Failed to fetch products');
            }
        });
    }});