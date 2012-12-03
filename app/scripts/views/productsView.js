ydemoe.Views.ProductsView = Backbone.View.extend({

	//id : 'products',
	//tagName : 'ul',

	el : '#products', // samma som id om dom-elementet redan finns i dokumentet

  initialize : function () {
  	console.log('view init');
  	this.render();
  }, 

  render : function () {
  	var self = this;
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
  }

});
