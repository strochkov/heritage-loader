}).call(windowShim, windowShim);

var difference = require('lodash.difference');
exports = difference(Object.keys(window), origWindowKeys);
if (exports.length === 1) {
    module.exports = windowShim[exports[0]];
} else {
    exports.forEach(function (key) {
        module.exports[key] = windowShim[key];
    });
}