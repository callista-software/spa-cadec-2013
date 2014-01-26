Cadec = {
    Models : { },
    Collections : { },
    Views : { },
    Routers : { },
    init : function() {
        console.log('Namespaces declared...');
        new Cadec.Routers.ApplicationRouter();
        Backbone.history.start(); 
    }
};
$(document).ready(function() {
    console.log('Hello Cadec!');
    Cadec.init();
});