/* eslint-env browser */

var app = require('./app');

function main () {
  var appElement = document.getElementById('app');
  app.render(appElement);
}

document.addEventListener('DOMContentLoaded', function () {
  main();
});
