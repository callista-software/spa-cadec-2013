// Define paths to our dependencies
require.config({
  baseUrl : 'scripts/',
  // load the main file
  deps : [ 'main' ],

  // The shim config allows us to configure dependencies for
  // scripts that do not call define() to register a module
  shim : {
    'underscore' : {
      exports : '_'
    },
    'backbone' : {
      deps : [ 'underscore', 'jquery' ],
      exports : 'Backbone'
    }
  },

  paths : {
    'jquery'     : 'vendor/jquery.min',
    'underscore' : 'vendor/lodash.min',
    'backbone'   : 'vendor/backbone'
  }
});


