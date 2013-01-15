Cadec.Views.CartView = Backbone.View.extend({

	el : '#cart', // samma som id om dom-elementet redan finns i dokumentet

	initialize : function () {
  		console.log('cart view init');
	  	this.$ul = $('ul', this.$el); // shortcut to the ul element 
    	this.render();
      this.listenTo(this.collection, 'add', this.onAdd, this);
      this.listenTo(this.collection, 'remove', this.onRemove, this);
      // if a model in the collection has changed, eg count
      this.listenTo(this.collection, 'change', this.onChange, this); 
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

    onAdd : function() {
      console.log('add event');
      this.render();
    },

    onRemove : function() {
      console.log('remove event');
      this.render();
    },

    onChange : function() {
      console.log('change event');
      this.render();
    }
});

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
