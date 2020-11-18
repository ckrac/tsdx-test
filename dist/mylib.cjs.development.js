'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var cn = _interopDefault(require('classnames'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var CoolThing = function CoolThing(_ref) {
  var className = _ref.className,
      color = _ref.color,
      children = _ref.children,
      onClick = _ref.onClick;
  return React.createElement("div", {
    className: cn('cool-thing', className),
    style: _extends({}, color && {
      color: color
    }),
    onClick: onClick
  }, children);
};

exports.CoolThing = CoolThing;
//# sourceMappingURL=mylib.cjs.development.js.map
