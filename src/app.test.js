var app = require('./app');

describe('app', function () {
  describe('render', function () {
    it('should greet the world', function () {
      var context = {};
      app.render(context);
      context.innerHTML.should.equal('<span>Hello World :)</span>');
    });
  });
});