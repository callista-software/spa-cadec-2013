Cadec.Routers.ApplicationRouter = Backbone.Router.extend({

    initialize : function() {
        console.log('Application Router initialized...');
    
        var self = this;

        Cadec.globalCart = new Cadec.Collections.Cart();
        
        new Cadec.Views.CartView({
            collection : Cadec.globalCart
        });

        this.products = new Cadec.Collections.ProductCollection();
        this.products.fetch({
            async : false,
            success : function() {
                self.listProducts();
            }
        });

    },
    
    listProducts : function () {
        if (this.products) {
            new Cadec.Views.ProductsView({
                collection : this.products
            });
        }
    },

    viewProduct : function(id) {
        var self = this;

        console.log('View product %s', id);
        this.products.any(function(product) {
            if (product.get('id') == id) {

                if (self.currentDetailView) {
                    self.currentDetailView.remove();
                }

                self.currentDetailView = new Cadec.Views.ProductDetailView({model : product});
                return true;
            }
        });
    },

    routes : {
        "products" : "listProducts",
        "products/:id" : "viewProduct"
    }
});
