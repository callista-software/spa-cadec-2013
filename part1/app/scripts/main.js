window.Cadec = {
    Models : { },
    Collections : { },
    Views : { },
    Routers : { },
    init : function() {
        console.log('Namespaces declared...');
    }
};
$(document).ready(function() {
    Cadec.init();
    new Cadec.Routers.ApplicationRouter();
});
