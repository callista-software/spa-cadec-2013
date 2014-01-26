Cadec.Models.ProductModel = Backbone.Model.extend({

    urlRoot: '/api/products',
    defaults : {
        'name'        : '',
        'description' : '',
        'inStock'     : '0',
        'imgSrc'      : '128x128.png'
    },

    initialize : function (options) {
        console.log('product init');
    }
});