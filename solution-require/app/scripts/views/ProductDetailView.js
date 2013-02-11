define([
  'jquery',
  'underscore',
  'backbone',
  'models/CartModel'
], function ( $, _, Backbone, CartModel ) { 

  var ProductDetailView = Backbone.View.extend({

    //el : '#details', 
    // skapar detachad div som vi hänger på DOM-trädet manuellt
    id : 'detailsView', 
    
    events : {
      'click #addButton' : 'addToCart'
    },

    initialize : function ( options ) {
      console.log('details init');
      this.template = _.template($('#productDetailTemplate').html());
      this.Cadec = options.app;
      this.render();

      $('#details').empty().append(this.$el);
      this.listenTo(this.model, 'change', this.render, this);
    }, 

    render : function () {
      this.$el.empty().append(this.template(this.model.toJSON()));
      if (this.model.get('inStock') < 1) {
        // find the addButton in this dom-tree and disable it
        $('#addButton', this.$el).attr('disabled','true');
      }
    },

  	addToCart : function () {
	    console.log('add to cart! %s', this.model.toJSON());
	    // create a new CartModel to put in the cart
	    var cartItem = new CartModel({
	        product : this.model
	    });

	    this.Cadec.globalCart.addToCart(cartItem);
    }
  });

  return ProductDetailView;
});