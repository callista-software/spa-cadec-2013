window.cadec = {
    Models : { },
    Collections : { },
    Views : { },
    Routers : { },
    init : function() {
        console.log('Namespaces declared...');
    }
};

$(document).ready(function() {
    console.log('Hello Cadec!');
    cadec.init();
    new cadec.Routers.ApplicationRouter();

    Backbone.history.start()
});
