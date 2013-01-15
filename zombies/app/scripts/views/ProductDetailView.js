Cadec.Views.ProductDetailView = Backbone.View.extend({

    el : '#details', 

    events : {
        'click #addButton' : 'addToCart'
    },

    initialize : function () {
        console.log('details init');
        this.template = _.template($('#productDetailTemplate').html());
        this.render();
        this.listenTo(this.model, 'change', this.render);
    }, 

    render : function () {
        this.$el.empty().append(this.template(this.model.toJSON()));
        if (this.model.get('inStock') < 1) {
            // find the addButton in this dom-tree and disable it
            $('#addButton', this.$el).attr('disabled','true');
        }
    }, 

    addToCart : function () {
        console.log('add to cart! %s', this.model.toJSON());
        // create a new CartModel to put in the cart
        var cartItem = new Cadec.Models.CartModel({
            product : this.model
        });

        Cadec.globalCart.addToCart(cartItem);
    }
});