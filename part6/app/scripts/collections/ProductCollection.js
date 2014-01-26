Cadec.Collections.ProductCollection = Backbone.Collection.extend({
    model : Cadec.Models.ProductModel,
    url : '/api/products',

    initialize: function(){
          console.log("Init ProductCollection");
        }
});