define([
  'jquery',
  'underscore',
  'backbone',
  'app',
  'text!templates/ProductDetailTemplate.html',
  'models/CartModel'
], function ( $, _, Backbone, Cadec, ProductDetailTemplate, CartModel ) { 

  var ProductDetailView = Backbone.View.extend({

    //el : '#details', 
    // skapar detachad div som vi hänger på DOM-trädet manuellt
    id : 'detailsView', 
    
    events : {
      'click #addButton' : 'addToCart'
    },

    initialize : function ( options ) {
      console.log('details init');
      this.template = _.template(ProductDetailTemplate);
      this.render();

      $('#details').empty().append(this.$el);
      this.listenTo(this.model, 'change:inStock', this.updateInStock, this);
    }, 

    render : function () {
      this.$el.empty().append(this.template(this.model.toJSON()));
      this.updateAddButton();
    },

    updateAddButton : function () {
      var disabled = (this.model.get('inStock') < 1);
      // find the addButton in this dom-tree and disable it
      $('#addButton', this.$el).prop('disabled', disabled);
    }, 

    updateInStock : function ( event ) {
      $('#inStock').html(this.model.get('inStock'));
      this.updateAddButton();
    },

  	addToCart : function () {
	    console.log('add to cart! %s', this.model.toJSON());
	    // create a new CartModel to put in the cart
	    var cartItem = new CartModel({
	        product : this.model
	    });

	    Cadec.globalCart.addToCart(cartItem);
    }
  });

  return ProductDetailView;
});