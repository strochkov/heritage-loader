}).call(windowShim, windowShim);

var _arr = require('lodash/array');
exports = _arr.difference(windowShim, window);
// exports = Object.getOwnPropertyNames(windowShim);

if (exports.length === 1) {
    module.exports = windowShim[exports[0]];
} else {
    exports.forEach(function (key) {
        module.exports[key] = windowShim[key];
    });
}
