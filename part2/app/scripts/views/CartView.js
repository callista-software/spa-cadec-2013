Cadec.Views.CartView = Backbone.View.extend({

    // attacha till dom-elementet #cart som redan finns i dokumentet
    el : '#cart', 

    initialize : function () {
        console.log('cart view init');
        this.$ul = $('ul', this.$el); // genväg till ul-elementet 
        this.render();
    },

    render : function () {
        // clear the cart before new render
        this.$ul.empty();
        this.collection.each(function (cartModel) {
            var view = new Cadec.Views.CartItemView({
                model : cartModel
            });
            this.$ul.append(view.el);
        }, this);
    }

});