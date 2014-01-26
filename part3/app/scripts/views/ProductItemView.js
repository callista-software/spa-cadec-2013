Cadec.Views.ProductItemView = Backbone.View.extend({

    tagName : 'li',
    className : 'productItem',

	events : {
	    'click' : 'onclick'
	},

    initialize : function () {
        this.template = _.template($('#productItemTemplate').html());
        this.render();    
    },

    render : function () {
        this.$el.html(this.template(this.model.toJSON()));
    },

	onclick : function () {
	    console.log('click! '+this.model.id);
	    this.$el.addClass('highlight');
	    new Cadec.Views.ProductDetailsView({
	        model : this.model
	    });
	}

});