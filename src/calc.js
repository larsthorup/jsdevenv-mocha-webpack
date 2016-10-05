function add (a, b) {
  return a + b;
}

function adding (a, b) {
  return new Promise(function (resolve) {
    resolve(a + b);
  });
}

function addSlow (a, b, cb) {
  window.setTimeout(function () {
    cb(a + b)
  }, 1000);
}

function divide (a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function reverse (list) {
  var result = [];
  for (var i = list.length - 1; i >= 0; --i) {
    result.push(list[i]);
  }
  return result;
}

module.exports = {
  add: add,
  adding: adding,
  addSlow: addSlow,
  divide: divide,
  reverse: reverse
};
