Cadec.Views.ProductDetailView = Backbone.View.extend({

  // skapar detachad div som vi hänger på DOM-trädet manuellt
	id : 'detailsView', 

	events : {
		'click #addButton' : 'addToCart'
	},

  initialize : function () {
  	console.log('details init');
		this.template = _.template($('#productDetailTemplate').html());
		this.listenTo(this.model, 'change', this.productChanged, this);
  	this.render();
  }, 

  render : function () {
  	this.$el.empty().append(this.template(this.model.toJSON()));
    if (this.model.get('inStock') < 1) {
      $('#addButton', this.$el).attr('disabled','true');
    }
  },

  productChanged : function () {
    this.render();
  },
  
  addToCart : function () {
  	console.log('add to cart! %s', this.model.id);

    var cartItem = new Cadec.Models.CartModel({
      product : this.model
    });

  	Cadec.globalCart.addToCart(cartItem);
  }

});
