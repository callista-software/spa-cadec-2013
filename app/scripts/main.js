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

  // Create a gobal cart object in which we can
  // put products
  Cadec.globalCart = new Cadec.Collections.Cart();
	
  new Cadec.Routers.ApplicationRouter();

  // During page load, after your application has finished creating 
  //all of its routers, be sure to call Backbone.history.start(), or 
  //Backbone.history.start({pushState: true}) to route the initial URL.

  // To indicate that you'd like to use HTML5 pushState support in your application, 
  //use Backbone.history.start({pushState: true}).
  Backbone.history.start();
});
