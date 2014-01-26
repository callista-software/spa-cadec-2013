Cadec = {
    Models : { },
    Collections : { },
    Views : { },
    Routers : { },
    init : function() {
        console.log('Namespaces declared...');
        new Cadec.Routers.ApplicationRouter();
    }
};
$(document).ready(function() {
    console.log('Hello Cadec!');
    Cadec.init();
});