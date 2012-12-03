ydemoe.Views.ProductDetailView = Backbone.View.extend({

	el : '#details', 

	events : {
		'click #addToCart' : 'addToCart'
	},

  initialize : function () {
  	console.log('details init');
		this.template = _.template($('#productDetailTemplate').html());
		this.model.on('change', this.render, this);
  	this.render();
  }, 

  render : function () {
  	this.$el.empty().append(this.template(this.model.toJSON()));
  },

  addToCart : function () {
  	console.log('add to cart!');
  	ydemoe.globalCart.addToCart(this.model);
  }

});
