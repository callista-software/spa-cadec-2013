Cadec.Views.CartView = Backbone.View.extend({

	el : '#cart', // samma som id om dom-elementet redan finns i dokumentet

	initialize : function () {
  		console.log('cart view init');
	  	this.$ul = $('ul', this.$el); // shortcut to the ul element 
    	this.render();
  	},


  	render : function () {
  		var self = this;
    	// clear the cart before new render
    	this.$ul.empty();
  		this.collection.each(function (cartModel) {
			var view = new Cadec.Views.CartItemView({
				model : cartModel
			});
			self.$ul.append(view.el);
		});
  	}, 
});

Cadec.Views.CartItemView = Backbone.View.extend({

	tagName : 'li',
	className : 'cartItem',

	initialize : function () {
		this.template = _.template($('#cartTemplate').html());
 		this.render();		
	},

	render : function () {
  		this.$el.html(this.template(this.model.toJSON()));
  	}, 


});
