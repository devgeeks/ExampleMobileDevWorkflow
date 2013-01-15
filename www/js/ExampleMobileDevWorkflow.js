/*! ExampleMobileDevWorkflow - v0.1.0 - 2013-01-16
 * Copyright (c) 2013 Tommy-Carlos Williams (http://devgeeks.org);
 * License: Apache2 (http://www.apache.org/licenses/LICENSE-2.0)
 */

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
      console.log('Device Ready');
    }
  });

})(window.app = window.app || {}, window);
