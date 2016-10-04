var app = require('./app');

describe('app', function () {
  describe('render', function () {
    describe('isomorphic', function () {
      it('should greet the world', function () {
        var context = {};
        app.render(context);
        context.innerHTML.should.equal('<span>Hey! 4 + 7 = 11</span>');
      });
    });

    if (!window.isFake) describe('in browser', function () {
      beforeEach(function () {
        this.context = document.createDocumentFragment();
      });

      it('should greet the world', function () {
        app.render(this.context);
        this.context.innerHTML.should.equal('<span>Hey! 4 + 7 = 11</span>');
      });
    });
  });
});