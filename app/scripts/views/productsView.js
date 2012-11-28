ydemoe.Views.ProductsView = Backbone.View.extend({

	//id : 'products',
	//tagName : 'ul',

	el : '#products', // samma som id om dom-elementet redan finns i dokumentet

  initialize : function () {
  	console.log('view init');
  	this.template = _.template($('#productsTemplate').html());
 		this.render();
  }, 

  render : function () {
  	var self = this;
  	_.each(this.model.models, function (product) {
	  	self.$el.append(self.template(product.toJSON()));
  	});
  }

});
