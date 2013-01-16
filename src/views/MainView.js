(function(app, $, _, Backbone, window){
  "use strict";

  app.MainView = Backbone.View.extend({
    el: "#main",
    events: {
      'tap uibutton.menu': 'menuButton_handler'
    },
    menuOpen: false,
    initialize: function() {
      _.bindAll(this);
      // @FIXME: Refactor any #menu-specific stuff into a MenuView
      $('#menu input[type=search]').attr('disabled',true);
      $('#menu').css('width',($(window).width() - 48) + "px");
    },
    render: function() {
      // ...
    },
    menuButton_handler: function(e) {
      var _self = this;
      if (parseInt($('#main').css('left'),10) === 0) {
        _self.$el.animate({
          left: ($(window).width() - 50) + "px"
        },250,'ease-in-out');
        // @FIXME: Refactor any #menu-specific stuff into a MenuView
        //  Use events to tell #menu to do this stuff
        window.setTimeout(function(){
          $('#menu input[type=search]').removeAttr('disabled');
        },400);
        _self.menuOpen = true;
      }
      else if (parseInt($('#main').css('left'),10)) {
        _self.$el.animate({
          left: '0'
        },250,'ease-in-out');
        // @FIXME: Refactor any #menu-specific stuff into a MenuView
        //  Use events to tell #menu to do this stuff
        $('#menu input[type=search]').blur();
        window.setTimeout(function(){
          $('#menu input[type=search]').attr('disabled',true);
        },400);
        _self.menuOpen = false;
      }
    }
  });

})(window.app = window.app || {}, window.$, window._, window.Backbone, window, undefined);
