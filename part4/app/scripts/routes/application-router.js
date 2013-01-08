Cadec.Routers.ApplicationRouter = Backbone.Router.extend({

    products : null,
    currentDetailView : null,

    initialize : function() {
        console.log('Application Router initialized...');
    
        Cadec.globalCart = new Cadec.Collections.Cart();
        new Cadec.Views.CartView({
            collection : Cadec.globalCart
        });
    },
    
    listProducts : function() {
        var self = this;

        if (!this.products) {
            this.products = new Cadec.Collections.ProductCollection();
            this.products.fetch({
                success : function() {
                    new Cadec.Views.ProductsView({collection : self.products});
                }
            });
        } else {
            new Cadec.Views.ProductsView({collection : self.products})
        }
    },

    routes : {
        'products' : 'listProducts',
        'products/:id' : 'viewProduct'
    },

    viewProduct : function(id) {
        var self = this;
        this.listProducts();

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
    }
});
