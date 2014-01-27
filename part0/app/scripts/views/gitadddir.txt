Cadec.Views.ProductsView = Backbone.View.extend({

    // attacha till dom-elementet #products som redan finns i dokumentet
    el : '#products', 

    initialize : function () {
        console.log('product collection view init');
        this.render();
    }, 

    render : function () {
        this.$el.empty();
        this.collection.each(function (product) {
            var view = new Cadec.Views.ProductItemView({
                model : product
            })
            this.$el.append(view.el);
        }, this);
    }

});