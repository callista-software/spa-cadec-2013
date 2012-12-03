ydemoe.Views.CartView = Backbone.View.extend({

	//id : 'products',
	//tagName : 'ul',

	el : '#cart', // samma som id om dom-elementet redan finns i dokumentet

  initialize : function () {
  	console.log('cart init');
  	this.model = ydemoe.globalCart;
  	this.model.on('change', this.render, this);
  	this.model.on('add', this.render, this);
  	this.render();
  }, 

  render : function () {
  	var self = this;
    this.$el.empty();
  	_.each(this.model.models, function (product) {
			var view = new ydemoe.Views.CartItemView({
				model : product
			});
			self.$el.append(view.el);
		});
  }

});

ydemoe.Views.CartItemView = Backbone.View.extend({

	tagName : 'li',
	className : 'cartItem',

	events : {
		'click' : 'onclick'
	},

	initialize : function () {
		this.template = _.template($('#cartTemplate').html());
 		this.render();		
	},

	render : function () {
  	this.$el.html(this.template(this.model.toJSON()));
  }, 

  onclick : function () {
  	console.log('click!');
  	this.$el.addClass('highlight');
  	new ydemoe.Views.ProductDetailView({
  		model : this.model
  	});
  }

});
