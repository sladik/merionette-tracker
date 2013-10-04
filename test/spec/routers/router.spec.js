define([
  'jquery',
  'backbone',
  'marionette',
  'router',
  'views/mainLayout',
  'jasmine-jquery'
],
function ($, Backbone, Marionette, Router, MainLayout) {

  describe('Test for Router', function () {
    var router;
    describe('Initial setup', function () {
      beforeEach(function () {
        spyOn(MainLayout.prototype, 'render');
        router = new Router();
        });
      it('Should have layout and render it', function () {
        expect(MainLayout.prototype.render).toHaveBeenCalled();
      });
      it('Routes schould be defined', function () {
        expect(router.routes).toBeDefined();
      });
    });

    describe('Control for routs', function () {
      beforeEach(function () {
        router = new Router();
        spyOn(router, 'imagesUploaded').andCallThrough();
        spyOn(router, 'docsUploaded').andCallThrough();
        spyOn(router, 'ajaxUpload').andCallThrough();
        spyOn(router, 'chooseUpload').andCallThrough();
        spyOn(router.layout.container, 'show');
      });
      it('Ajax upload rout', function () {
        router.ajaxUpload();
        expect(router.layout.container.show).toHaveBeenCalled();
      });
      it('Images upload rout', function () {
        router.imagesUploaded();
        expect(router.layout.container.show).toHaveBeenCalled();
      });
      it('Docs upload rout', function () {
        router.docsUploaded();
        expect(router.layout.container.show).toHaveBeenCalled();
      });
      it('Choose upload rout', function () {
        router.chooseUpload();
        expect(router.layout.container.show).toHaveBeenCalled();
      });
    });

    describe('Router correct routes', function () {
      it('Should call AjaxUpload method', function () {
        router.navigate('upload', true);
        expect(router.routes['upload']).toEqual('ajaxUpload');
      });
      it('Should call Images Upload method', function () {
        router.navigate('images', true);
        expect(router.routes['images']).toEqual('imagesUploaded');
      });
      it('Should call Docs Upload method', function () {
        router.navigate('docs', true);
        expect(router.routes['docs']).toEqual('docsUploaded');
      });
      it('Should call Choose Upload method', function () {
        router.navigate('choose', true);
        expect(router.routes['choose']).toEqual('chooseUpload');
      });
    });
  });

});


