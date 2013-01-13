Cadec.Views.CartView = Backbone.View.extend({

	el : '#cart', // samma som id om dom-elementet redan finns i dokumentet

  events : {
    'click #order' : 'order'
  },

  initialize : function () {
  	console.log('cart init');
    // shortcut to the ul element 
  	this.$ul = $('ul', this.$el);
    this.collection.on('change', this.onChange, this); // if a model in the collection has changed, eg count
  	this.collection.on('add', this.onAdd, this);
  	this.collection.on('remove', this.onRemove, this);
    this.render();
  },

  onAdd : function() {
    this.render();
  },

  onRemove : function() {
    this.render();
  },

  onChange : function() {
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

  order : function () {
    console.log('Order!');
    this.collection.sync('create', this.collection, {
      success : function (model, response, options) {
        console.log('order sent');
      }, 
      error : function (model, xhr, options) {
        console.log('failed to send order: '+xhr.responseText);
      }
    });
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
