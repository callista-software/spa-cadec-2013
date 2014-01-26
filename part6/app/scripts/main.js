Cadec = {
    Models : { },
    Collections : { },
    Views : { },
    Routers : { },
    init : function() {
        console.log('Namespaces declared...');
        new Cadec.Routers.ApplicationRouter();
        Backbone.history.start(); 
        // låt Cadec fungera som event bus
        _.extend(Cadec, Backbone.Events);
    }
};
$(document).ready(function() {
    console.log('Hello Cadec!');
    Cadec.init();
});