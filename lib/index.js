'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _addons = require('@storybook/addons');

var _addons2 = _interopRequireDefault(_addons);

var _reactElementToJsxString = require('react-element-to-jsx-string');

var _reactElementToJsxString2 = _interopRequireDefault(_reactElementToJsxString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderJsx = function renderJsx(code, options) {
  for (var i = 0; i < options.skip; i++) {
    if (typeof code === 'undefined') {
      console.warn('Cannot skip undefined element');
      return;
    }

    if (_react2.default.Children.count(code) > 1) {
      console.warn('Trying to skip an array of elements');
      return;
    }

    if (typeof code.props.children === 'undefined') {
      console.warn('Not enough children to skip elements.');

      if (typeof code.type === 'function' && code.type.name === '') code = code.type(code.props);
    } else {
      if (typeof code.props.children === 'function') {
        code = code.props.children();
      } else {
        code = code.props.children;
      }
    }
  }

  if (typeof code === 'undefined') return console.warn('Too many skip or undefined component');

  while (typeof code.type === 'function' && code.type.name === '') {
    code = code.type(code.props);
  }var ooo = typeof options.displayName === 'string' ? Object.assign({}, options, { displayName: function displayName() {
      return options.displayName;
    } }) : options;

  return _react2.default.Children.map(code, function (c) {
    return (0, _reactElementToJsxString2.default)(c, ooo);
  }).join('\n');
};

exports.default = {
  addWithJSX: function addWithJSX(kind, storyFn) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var defaultOpts = {
      skip: 0,
      showFunctions: true
    };
    var options = Object.assign({}, defaultOpts, opts);
    var channel = _addons2.default.getChannel();

    var result = this.add(kind, function (context) {
      var story = storyFn(context);

      var jsx = renderJsx(story, options);
      channel.emit('kadira/jsx/add_jsx', result.kind, kind, jsx);

      return story;
    });

    return result;
  }
};