Cadec.Views.CartItemView = Backbone.View.extend({

    tagName : 'li',
    className : 'cartItem',

    events : {
	    'click .icon-plus-sign' : 'add',
	    'click .icon-minus-sign' : 'remove'
	},

    initialize : function () {
        this.template = _.template($('#cartTemplate').html());
        this.render();
    },

    render : function () {
        this.$el.html(this.template(this.model.toJSON()));
    },

	add : function () {
	    console.log('add!');
	    Cadec.globalCart.addToCart(this.model);
	}, 

	remove : function () {
	    console.log('remove!');
	    Cadec.globalCart.removeFromCart(this.model);
	}

});