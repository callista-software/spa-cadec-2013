ydemoe.Views.ProductsView = Backbone.View.extend({

	//id : 'products',
	//tagName : 'ul',

	el : '#products', // samma som id om dom-elementet redan finns i dokumentet

  initialize : function () {
  	console.log('view init');
  	this.model.on('change', this.render, this);
  	this.render();
  }, 

  render : function () {
  	var self = this;
  	this.$el.empty();
  	_.each(this.model.models, function (product) {
			var view = new ydemoe.Views.ItemView({
				model : product
			});
			self.$el.append(view.el);
		});
  }

});

ydemoe.Views.ItemView = Backbone.View.extend({

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
  	if (ydemoe.currentView) {
  		// unbind any events the view is listening to
  		ydemoe.currentView.off();
  		ydemoe.currentView.model.off();
  		// remove the view from the dom, 
  		//ydemoe.currentView.remove();
  	}
  	ydemoe.currentView = new ydemoe.Views.ProductDetailView({
  		model : this.model
  	});
  }

});
