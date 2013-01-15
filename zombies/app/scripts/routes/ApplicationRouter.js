Cadec.Routers.ApplicationRouter = Backbone.Router.extend({

    initialize : function() {
        console.log('Application Router initialized...');
    
        Cadec.globalCart = new Cadec.Collections.Cart();
        
        new Cadec.Views.CartView({
            collection : Cadec.globalCart
        });

        this.listProducts();

    },
    
    listProducts : function () {
        var products = new Cadec.Collections.ProductCollection();
        console.log('list products');
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
