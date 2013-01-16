Cadec.Views.ProductsView = Backbone.View.extend({

  el : '#products', // samma som id om dom-elementet redan finns i dokumentet

  initialize : function () {
    console.log('Product Collection view init');
    this.render();

    this.listenTo(this.collection, 'change', this.render);
  }, 

	render : function () {
    	var self = this;
    	this.$el.empty();
    	this.collection.each(function (product) {
    		var view = new Cadec.Views.ItemView({
        		model : product
        	});
        	self.$el.append(view.el);
    	});
	}
});

Cadec.Views.ItemView = Backbone.View.extend({

  tagName : 'li',
  className : 'productItem',

  initialize : function () {
    this.template = _.template($('#productsTemplate').html());
    this.render();    
  },

  render : function () {
    this.$el.html(this.template(this.model.toJSON()));
  }, 

  events : {
    'click' : 'onclick'
  },

  onclick : function () {
      console.log('click! '+this.model.cid);
      this.$el.addClass('highlight');
      if (Cadec.currentView) {
        // close the current view
        Cadec.currentView.remove();
      }
      Cadec.currentView = new Cadec.Views.ProductDetailView({
          model : this.model
      });
  }

});