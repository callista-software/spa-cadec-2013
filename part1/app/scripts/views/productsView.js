cadec.Views.ProductsView = Backbone.View.extend({

//  id : 'productsView',
  //tagName : 'ul',
  el : '#products', // samma som id om dom-elementet redan finns i dokumentet

  initialize : function () {
  	console.log('product collection view init');
  	this.render();
  }, 

  render : function () {
  	var self = this;
  	this.$el.empty();
  	this.collection.each(function (product) {
			var view = new cadec.Views.ItemView({
				model : product
			})
			self.$el.append(view.el);
		});
  }

});

cadec.Views.ItemView = Backbone.View.extend({

  tagName : 'li',
  className : 'productItem',

  initialize : function () {
    this.template = _.template($('#productsTemplate').html());
    this.render();    
  },

  render : function () {
    this.$el.html(this.template(this.model.toJSON()));
  }, 

});
