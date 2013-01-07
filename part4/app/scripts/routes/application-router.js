Cadec.Routers.ApplicationRouter = Backbone.Router.extend({

    initialize : function() {
        console.log('Application Router initialized...');
    
        Cadec.globalCart = new Cadec.Collections.Cart();
        new Cadec.Views.CartView({
            collection : Cadec.globalCart
        });
    }
});
