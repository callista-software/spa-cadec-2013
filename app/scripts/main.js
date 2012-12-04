window.Cadec = {
  // define our namespaces
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    console.log('Hello from Cadec!');
  }
};

$(document).ready(function(){
  Cadec.init();
	new Cadec.Routers.ApplicationRouter();
  
});
