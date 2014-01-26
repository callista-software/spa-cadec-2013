Cadec.Views.ProductItemView = Backbone.View.extend({

    tagName : 'li',
    className : 'productItem',

    initialize : function () {
        this.template = _.template($('#productItemTemplate').html());
        this.render();  
        this.listenTo(Cadec, 'cartUpdated', this.update);    
    },

    render : function () {
        this.$el.html(this.template(this.model.toJSON()));
	},

	update : function (product) {
        if (product.id === this.model.id) {
            this.model = product;
            this.render();
        } 
    }

});