Cadec.Views.CartView = Backbone.View.extend({

    // attacha till dom-elementet #cart som redan finns i dokumentet
    el : '#cart', 

    events : {
        'click #order' : 'order'
    },

    initialize : function () {
        console.log('cart view init');
        this.$ul = $('ul', this.$el); // genväg till ul-elementet 
        this.render();
        this.listenTo(this.collection, 'add', this.onAdd);
        this.listenTo(this.collection, 'remove', this.onRemove);
        // if a model in the collection has changed, eg count
        this.listenTo(this.collection, 'change', this.onChange); 
    },

    render : function () {
        // clear the cart before new render
        this.$ul.empty();
        this.collection.each(function (cartModel) {
            var view = new Cadec.Views.CartItemView({
                model : cartModel
            });
            this.$ul.append(view.el);
        }, this);
    },

    onAdd : function() {
        console.log('add event');
        this.render();
    },

    onRemove : function() {
        console.log('remove event');
        this.render();
    },

    onChange : function() {
        console.log('change event');
        this.render();
    },

   order : function () {
        var self = this;
        console.log('Order!');
        this.collection.sync('create', this.collection, {
            success : function (model, response, options) {
                self.orderSent();
            }, 
            error : function (model, xhr, options) {
                console.log('Failed to send order: ' + xhr.responseText);
            }
        });
    },

    orderSent : function () {
        console.log('Order sent');
        this.collection.reset();
        this.render();
    }

});