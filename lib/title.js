'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCopyToClipboard = require('react-copy-to-clipboard');

var _reactCopyToClipboard2 = _interopRequireDefault(_reactCopyToClipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = function (_Component) {
  _inherits(Title, _Component);

  function Title(props) {
    var _ref;

    _classCallCheck(this, Title);

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Title.__proto__ || Object.getPrototypeOf(Title)).call.apply(_ref, [this, props].concat(args)));

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

  _createClass(Title, [{
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
    key: '_copy',
    value: function _copy() {
      if (typeof this.state.current !== 'undefined' && typeof this.state[this.state.current.kind] !== 'undefined') {
        Copy.copy(this.state[current.kind][current.story]);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (typeof this.state.current !== 'undefined' && typeof this.state[this.state.current.kind] !== 'undefined') {
        var _current = this.state.current;
        var code = this.state[_current.kind][_current.story];

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'span',
            { style: styles.title },
            'JSX'
          ),
          _react2.default.createElement(
            _reactCopyToClipboard2.default,
            { style: styles.btn, text: code ? code : '' },
            _react2.default.createElement(
              'button',
              null,
              'Copy'
            )
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'span',
            { style: styles.title },
            'JSX'
          ),
          _react2.default.createElement(
            _reactCopyToClipboard2.default,
            { style: styles.btn, text: '', disabled: true },
            _react2.default.createElement(
              'button',
              null,
              'Copy'
            )
          )
        );
      }
    }
  }]);

  return Title;
}(_react.Component);

exports.default = Title;


var styles = {
  title: {
    marginRight: 8
  },
  btn: {
    flex: 1,
    outline: 'none',
    border: '1px solid #A7A7A7',
    borderRadius: 2,
    color: '#A7A7A7',
    padding: 2,
    margin: 0,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'all .3s ease'
  }
};