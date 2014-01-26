Cadec.Views.CartItemView = Backbone.View.extend({

    tagName : 'li',
    className : 'cartItem',

    initialize : function () {
        this.template = _.template($('#cartTemplate').html());
        this.render();
    },

    render : function () {
        this.$el.html(this.template(this.model.toJSON()));
    }

});