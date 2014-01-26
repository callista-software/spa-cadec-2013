Cadec.Routers.ApplicationRouter = Backbone.Router.extend({
    
    routes : {
        'products/:id' : 'viewProduct'
    },

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
        console.log('List products');
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
    },

    viewProduct : function(id) {
        console.log('View product %s', id);
        var product = new Cadec.Models.ProductModel({id : id});
        product.fetch({
            success : function(model) {
                new Cadec.Views.ProductDetailsView({
                   model : model
                });
            }
        });
    }
});