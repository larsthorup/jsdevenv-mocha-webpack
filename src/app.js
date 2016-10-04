var calc = require('./calc');

function render(context) {
  context.innerHTML = '<span>Hey! 4 + 7 = ' + calc.add(4, 7) + '</span>';
}

module.exports = {
  render: render
};
