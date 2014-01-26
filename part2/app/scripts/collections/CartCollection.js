Cadec.Collections.CartCollection = Backbone.Collection.extend({

    model : Cadec.Models.CartModel,
    url : '/api/order',

    initialize: function() {
        console.log("Cart collection init");
    }

});