define([
  'jquery',
  'underscore',
  'backbone',
  'models/ProductModel'
], function ( $, _, Backbone, ProductModel ) { 

  var ProductCollection = Backbone.Collection.extend({

  	url : '/api/products',
	
    model : ProductModel,

    initialize: function () { 
      console.log("Init ProductCollection");
    }
  });

  return ProductCollection;
});