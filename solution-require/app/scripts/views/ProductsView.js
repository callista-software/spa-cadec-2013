define([
  'jquery',
  'underscore',
  'backbone'
], function ( $, _, Backbone ) { 

  var ProductsView = Backbone.View.extend({

    el : '#products', // samma som id om dom-elementet redan finns i dokumentet

    initialize : function () {
      console.log('Product Collection view init');
      this.render();
    }, 

  	render : function () {
    	var self = this;
    	this.$el.empty();
    	this.collection.each(function (product) {
    		var view = new ItemView({
        	model : product
        });
      	self.$el.append(view.el);
    	});
    }
  });

  var ItemView = Backbone.View.extend({

    tagName : 'li',
    className : 'productItem',

    initialize : function () {
      this.template = _.template($('#productsTemplate').html());
      this.listenTo(this.model, 'change', this.render, this);
      this.render();    
    },

    render : function () {
      this.$el.html(this.template(this.model.toJSON()));
    }
  });

  return ProductsView;
});