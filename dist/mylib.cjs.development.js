'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var CoolThing = require('@src/components/CoolThing/CoolThing');
var CoolThing__default = _interopDefault(CoolThing);



Object.keys(CoolThing).forEach(function (k) {
	if (k !== 'default') Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return CoolThing[k];
		}
	});
});
exports.CoolThing = CoolThing;
//# sourceMappingURL=mylib.cjs.development.js.map
