describe('app', function() {
  describe('components', function() {
    it('should have yepnope', function() {
      expect(window.yepnope).toBeDefined();
    });

    it('should have zepto', function() {
      expect(window.$).toBeDefined();
      // not only should $ exist, but $ should be Zepto, not jQuery...
      expect(window.$).toEqual(window.Zepto);
    });

    it('should have underscore', function() {
      expect(window._).toBeDefined();
    });

    it('should have backbone', function() {
      expect(window.Backbone).toBeDefined();
    });

    it('should have backbone.basicauth', function() {
      expect(window.Backbone.BasicAuth).toBeDefined();
    });

    // Remove if no longer using ChUI
    it('should have chocolatechip-ui', function() {
      expect(window.$.UIAlphabeticalList).toBeDefined();
    });
  });

  describe('initialize', function() {
    it('should have app', function() {
      expect(window.app).toBeDefined();
    });
    
    it('should bind deviceready', function() {
      runs(function(){
        spyOn(app,'onDeviceReady');
        app.initialize();
        helper.trigger(window.document,'deviceready');
      });
      
      waitsFor(function(){
        return (app.onDeviceReady.calls.length > 0);
      }, "deviceready should be called once", 500);
      
      runs(function(){
        expect(app.onDeviceReady).toHaveBeenCalled();
      });
    });
  });

});
