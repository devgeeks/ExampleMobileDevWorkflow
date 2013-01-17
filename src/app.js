(function (app, window, undefined) {
  "use strict";
  var console = window.console || {};
  console.log = console.log || function(){};
  var Backbone    = window.Backbone,
      _           = window._,
      $           = window.$;

  _.extend(app, {
    initialize: function() {
      document.addEventListener("deviceready", app.onDeviceReady, false);
    },
    onDeviceReady: function() {
      // @FIXME: This seems cludgey
      if (window.cssLoaded && navigator.splashscreen) {
        navigator.splashscreen.hide();
      }
    }
  });

})(window.app = window.app || {}, window);
