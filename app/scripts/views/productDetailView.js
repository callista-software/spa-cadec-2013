Cadec.Views.ProductDetailView = Backbone.View.extend({

  // skapar detachad div som vi hänger på DOM-trädet manuellt
	id : 'detailsView', 

	events : {
		'click #addButton' : 'addToCart'
	},

  initialize : function () {
  	console.log('details init');
		this.template = _.template($('#productDetailTemplate').html());
		this.listenTo(this.model, 'change', this.render, this);
  	this.render();
  }, 

  render : function () {
    this.$el.html(this.template(this.model.toJSON()));
    if (this.model.get('inStock') < 1) {
      $('#addButton', this.$el).attr('disabled','true');
    }
//    $('#details').empty().append(this.$el);
  },

  addToCart : function () {
  	console.log('add to cart!');
  	Cadec.globalCart.addToCart(this.model);
  }

});
