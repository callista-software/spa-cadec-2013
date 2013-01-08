Cadec.Routers.ApplicationRouter = Backbone.Router.extend({

    products : null,
    currentDetailView : null,

    initialize : function() {
        console.log('Application Router initialized...');
    
        Cadec.globalCart = new Cadec.Collections.Cart();
        
        this.products = new Cadec.Collections.ProductCollection();
        this.products.fetch({async : false});
        
        new Cadec.Views.CartView({
            collection : Cadec.globalCart
        });
    },
    
    listProducts : function () {
        var self = this;

        console.log('Listing products');
        new Cadec.Views.ProductsView({
            collection : self.products 
        });
    },

    routes : {
        'products' : 'listProducts',
        'products/:id' : 'viewProduct'
    },

    viewProduct : function(id) {

        var self = this;

        this.listProducts();

        console.log('View product %s', id);
        this.products.each(function(product) {
            if (product.get('id') == id) {
                if (self.currentDetailView) {
                    self.currentDetailView.remove();
                }

                self.currentDetailView = new Cadec.Views.ProductDetailView({model : product});
            }
        });
    }
});
