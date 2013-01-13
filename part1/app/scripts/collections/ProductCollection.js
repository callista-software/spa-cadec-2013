Cadec.Collections.ProductCollection = Backbone.Collection.extend({

	url : '/api/products',
	
    model : Cadec.Models.ProductModel,

    initialize: function(){
          console.log("Init ProductCollection");
        }
});