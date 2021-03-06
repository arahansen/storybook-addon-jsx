'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _addons = require('@storybook/addons');

var _addons2 = _interopRequireDefault(_addons);

var _title = require('./title');

var _title2 = _interopRequireDefault(_title);

var _jsx = require('./jsx');

var _jsx2 = _interopRequireDefault(_jsx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Observable = function Observable(channel, api) {
  return function (listener) {
    channel.on('kadira/jsx/add_jsx', listener.next('jsx'));
    api.onStory(listener.next('current'));
  };
};

_addons2.default.register('kadira/jsx', function (api) {
  var ob = Observable(_addons2.default.getChannel(), api);

  _addons2.default.addPanel('kadira/jsx/panel', {
    title: _react2.default.createElement(_title2.default, { ob: ob }),
    render: function render() {
      return _react2.default.createElement(_jsx2.default, { ob: ob });
    }
  });
});