var sinon = require('sinon');
var app = require('./app');

describe('app', function () {
  describe('render', function () {
    describe('isomorphic', function () {
      it('should render the dialog', function () {
        var context = {
          querySelector: sinon.stub().returns({addEventListener: sinon.spy()})
        };
        app.render(context);
        context.innerHTML.should.have.string('<p id="result"></p>');
      });
    });

    if (!window.isFake) describe('in browser', function () {
      beforeEach(function () {
        var fragment = document.createDocumentFragment();
        fragment.appendChild(document.createElement('div'));
        this.context = fragment.querySelector('div');
      });

      beforeEach(function () {
        app.render(this.context);
      });

      it('should render the dialog', function () {
        this.context.querySelector('#result').textContent.should.equal('');
      });

      describe('clicking', function () {
        beforeEach(function () {
          this.context.querySelector('#a').value = '7';
          this.context.querySelector('#b').value = '9';
          this.context.querySelector('#calc').click();
        });

        it('should show the result', function () {
          this.context.querySelector('#result').textContent.should.equal('16');
        });
      });
    });
  });
});