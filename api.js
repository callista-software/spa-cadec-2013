var SpaApi = function(express_app) {
    this.app = express_app;
    this.response = function(response, data) {
        response.status(200);
        response.write(data);
        response.end();
    };
}

SpaApi.prototype.start = function() {
    var that = this;

    this.products = [{
        'id' : 1,
        'name' : 'Limefrukt',
        'description' : 'Underbara limefrukter från sydamerika',
        'inStock' : 2000
    },{
        'id' : 2,
        'name' : 'Äpplen',
        'description' : 'Fina svenska äpplen',
        'inStock' : 7000
    }];

    this.app.get('/products', function(req, res) {
        that.response(res, JSON.stringify(that.products));
    });
    
    this.app.get('/carts/:id', function(req, res) {
        console.log('Get cart with id %s', req.params.id);
        that.response(res, 'Get cart');
    });
    
    this.app.post('/carts/:id/items', function(req, res) {
        console.log('Adding item to cart (%s)', req.params.id);
        that.response(res, 'Adding cart item');
    });
    
    this.app.delete('/cart/:id/items/:product_id', function(req, res) {
        console.log('Removing item (%s) from cart (%s)', req.params.product_id, req.params.id);
        that.response(res, 'Removed item cart');
    });
}

module.exports = SpaApi