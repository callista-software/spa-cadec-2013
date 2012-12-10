Cadec.Views.ProductsView = Backbone.View.extend({

	//id : 'products',
	//tagName : 'ul',

	el : '#products', // samma som id om dom-elementet redan finns i dokumentet

  initialize : function () {
  	console.log('view init');
  	this.collection.on('change', this.render, this);
  	this.render();
  }, 

  render : function () {
  	var self = this;
  	this.$el.empty();
  	_.each(this.collection.models, function (product) {
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

	events : {
		'click' : 'onclick'
	},

	initialize : function () {
		this.template = _.template($('#productsTemplate').html());
 		this.render();		
	},

	render : function () {
  	this.$el.html(this.template(this.model.toJSON()));
  }, 

  onclick : function () {
  	console.log('click!');
  	this.$el.addClass('highlight');
  	if (Cadec.currentView) {
  		// unbind any events the view is listening to
  		//Cadec.currentView.undelegateEvents();
  		//Cadec.currentView.off();
  		//sCadec.currentView.model.off();
  		// remove the view from the dom, 
  		Cadec.currentView.remove();
  	}
  	Cadec.currentView = new Cadec.Views.ProductDetailView({
  		model : this.model
  	});
    $('#details').empty().append(Cadec.currentView.el);
  }

});
