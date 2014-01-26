Cadec.Models.CartModel = Backbone.Model.extend({

    defaults : {
        count : 1
    },

    initialize : function (options) {
        console.log('cart item init');

        var product = this.get('product');
        // shortcuts to ease template rendering
        this.id = product.get('id');
        this.set('name', product.get('name'));
    }

});