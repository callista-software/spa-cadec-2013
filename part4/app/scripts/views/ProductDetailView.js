Cadec.Views.ProductDetailView = Backbone.View.extend({

    //el : '#details', 
    // skapar detachad div som vi hänger på DOM-trädet manuellt
    id : 'detailsView', 
    
    initialize : function () {
        console.log('details init');
        this.template = _.template($('#productDetailTemplate').html());
        this.render();

        $('#details').empty().append(this.$el);
        this.listenTo(this.model, 'change', this.render, this);
    }, 

    render : function () {
        this.$el.empty().append(this.template(this.model.toJSON()));
        if (this.model.get('inStock') < 1) {
            // find the addButton in this dom-tree and disable it
            $('#addButton', this.$el).attr('disabled','true');
        }
    },

	events : {
	    'click #addButton' : 'addToCart'
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