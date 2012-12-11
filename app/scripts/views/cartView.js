Cadec.Views.CartView = Backbone.View.extend({

	//id : 'products',
	//tagName : 'ul',

	el : '#cart', // samma som id om dom-elementet redan finns i dokumentet

  initialize : function () {
  	console.log('cart init');
  	this.collection = Cadec.globalCart;
  	this.collection.on('change', this.render, this);
  	this.collection.on('add', this.onAdd, this);
  	this.render();
  },

  onAdd : function() {
    this.render();
  },

  render : function () {
  	var self = this;
    // clear the cart before new render
    this.$el.empty();
  	_.each(this.collection.models, function (cartModel) {
			var view = new Cadec.Views.CartItemView({
				model : cartModel
			});
			self.$el.append(view.el);
		});
  }

});

Cadec.Views.CartItemView = Backbone.View.extend({

	tagName : 'li',
	className : 'cartItem',

	events : {
		'click .icon-plus-sign' : 'add',
    'click #remove' : 'remove'
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
    Cadec.globalCart.decCart(this.model);
  }

});
