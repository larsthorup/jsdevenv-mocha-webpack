var calc = require('./calc');

function render(context) {
  context.innerHTML =
    '<div>' +
    '  <input id="a" type="text">' +
    '  <input id="b" type="text">' +
    '  <button id="calc">Calculate</button>' +
    '  <p id="result"></p>'
    '</div>';
  context.querySelector('#calc').addEventListener('click', function calculate () {
    var a = parseInt(context.querySelector('#a').value);
    var b = parseInt(context.querySelector('#b').value);
    var result = calc.add(a, b);
    context.querySelector('#result').textContent = result;
  });
}

module.exports = {
  render: render
};
