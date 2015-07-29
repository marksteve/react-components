(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.reactComponents = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

exports['default'] = _react2['default'].createClass({
  displayName: 'SuffixedInput',

  getInitialState: function getInitialState() {
    return {
      value: this.props.defaultValue || ''
    };
  },
  componentDidMount: function componentDidMount() {
    this._setInputValue(this.state.value);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  },
  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
    if (nextState.value !== this.state.value) {
      this._setInputValue(nextState.value);
    }
  },
  render: function render() {
    return _react2['default'].createElement(
      'div',
      {
        style: (0, _objectAssign2['default'])({
          border: '1px solid #ccc',
          minWidth: '5em',
          display: 'inline-block'
        }, this.props.style),
        className: (0, _classnames2['default'])(this.props.className),
        onClick: this._onFocus
      },
      _react2['default'].createElement('span', {
        ref: "input",
        style: (0, _objectAssign2['default'])({
          display: 'inline-block',
          outline: 0
        }, this.props.inputStyle),
        className: (0, _classnames2['default'])(this.props.inputClassName),
        onKeyUp: this._onChange,
        contentEditable: true
      }),
      _react2['default'].createElement(
        'span',
        {
          style: (0, _objectAssign2['default'])({
            color: '#ccc'
          }, this.props.suffixStyle)
        },
        this.props.suffix
      ),
      _react2['default'].createElement('input', {
        type: "hidden",
        value: this.state.value
      })
    );
  },
  _setInputValue: function _setInputValue(value) {
    _react2['default'].findDOMNode(this.refs.input).innerText = value;
  },
  _onFocus: function _onFocus(e) {
    _react2['default'].findDOMNode(this.refs.input).focus();
  },
  _onChange: function _onChange() {
    var _this = this;

    this.setState({
      value: _react2['default'].findDOMNode(this.refs.input).innerText
    }, function () {
      if (_this.props.onChange) {
        _this.props.onChange(_this.state.value);
      }
    });
  }
});
module.exports = exports['default'];

},{"classnames":undefined,"object-assign":undefined,"react":undefined}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _srcSuffixedInputJsx = require('../src/SuffixedInput.jsx');

var _srcSuffixedInputJsx2 = _interopRequireDefault(_srcSuffixedInputJsx);

module.exports = {
  SuffixedInput: _srcSuffixedInputJsx2['default']
};

},{"../src/SuffixedInput.jsx":1}]},{},[2])(2)
});