var chai = require('chai');
chai.should();

// Note: support for stubbing browser APIs no matter whether we are running in browser or Node.js
if (typeof window === 'undefined') {
  global.window = {
  };
}
