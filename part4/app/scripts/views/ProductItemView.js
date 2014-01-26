Cadec.Views.ProductItemView = Backbone.View.extend({

    tagName : 'li',
    className : 'productItem',

    initialize : function () {
        this.template = _.template($('#productItemTemplate').html());
        this.render();    
    },

    render : function () {
        this.$el.html(this.template(this.model.toJSON()));
	}

});