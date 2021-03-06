'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _prism = require('./prism');

var _prism2 = _interopRequireDefault(_prism);

var _css = require('./css');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var prismStyle = document.createElement('style');
prismStyle.innerHTML = _css2.default;
document.body.appendChild(prismStyle);

var JSX = function (_Component) {
  _inherits(JSX, _Component);

  function JSX(props) {
    var _ref;

    _classCallCheck(this, JSX);

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = JSX.__proto__ || Object.getPrototypeOf(JSX)).call.apply(_ref, [this, props].concat(args)));

    props.ob({
      next: function next(type) {
        return type === 'jsx' ? _this.onAddJSX.bind(_this) : _this.setCurrent.bind(_this);
      }
    });

    _this.state = {};
    _this.stopListeningOnStory = function () {
      return _this.setState({});
    };
    return _this;
  }

  _createClass(JSX, [{
    key: 'setCurrent',
    value: function setCurrent(kind, story) {
      this.setState({ current: { kind: kind, story: story } });
    }
  }, {
    key: 'onAddJSX',
    value: function onAddJSX(kind, story, jsx) {
      var state = this.state;

      if (typeof state[kind] === 'undefined') {
        state[kind] = {};
      }
      state[kind][story] = jsx;
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      if (typeof this.state.current !== 'undefined' && typeof this.state[this.state.current.kind] !== 'undefined') {
        var current = this.state.current;
        var code = this.state[current.kind][current.story];
        var jsx = code ? _prism2.default.highlight(code, _prism2.default.languages.jsx) : '';

        return _react2.default.createElement('pre', { style: styles.pre, dangerouslySetInnerHTML: { __html: jsx } });
      } else {
        return _react2.default.createElement('pre', { style: styles.pre });
      }
    }
  }]);

  return JSX;
}(_react.Component);

exports.default = JSX;


var styles = {
  pre: {
    flex: 1,
    padding: '5px 15px'
  }
};