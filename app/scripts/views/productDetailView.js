Cadec.Views.ProductDetailView = Backbone.View.extend({

	el : '#details', 

	events : {
		'click #addButton' : 'addToCart'
	},

  initialize : function () {
  	console.log('details init');
		this.template = _.template($('#productDetailTemplate').html());
		this.model.on('change', this.render, this);
  	this.render();
  }, 

  render : function () {
  	this.$el.empty().append(this.template(this.model.toJSON()));
    if (this.model.get('inStock') < 1) {
      $('#addButton', this.$el).attr('disabled','true');
    }
  },

  addToCart : function () {
  	console.log('add to cart!');
  	Cadec.globalCart.addToCart(this.model);
  }

});
