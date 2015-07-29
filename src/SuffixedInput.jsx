import React from 'react'
import objectAssign from 'object-assign'
import cn from 'classnames'

export default React.createClass({
  getInitialState() {
    return {
      value: this.props.defaultValue || '',
    }
  },
  componentDidMount() {
    this._setInputValue(this.state.value)
  },
  componentWillReceiveProps(nextProps) {
    this.setState({value: nextProps.value})
  },
  componentWillUpdate(nextProps, nextState) {
    if (nextState.value !== this.state.value) {
      this._setInputValue(nextState.value)
    }
  },
  render() {
    return (
      <div
        style={objectAssign({
          border: '1px solid #ccc',
          minWidth: '5em',
          display: 'inline-block',
          padding: '0 0.2em',
        }, this.props.style)}
        className={cn(this.props.className)}
        onClick={this._onFocus}
      >
        <span
          ref="input"
          style={objectAssign({
            display: 'inline-block',
            outline: 0,
          }, this.props.inputStyle)}
          className={cn(this.props.inputClassName)}
          onKeyUp={this._onChange}
          contentEditable
        />
        <span
          style={objectAssign({
            color: '#ccc',
          }, this.props.suffixStyle)}
        >
          {this.props.suffix}
        </span>
        <input
          type="hidden"
          value={this.state.value}
        />
      </div>
    )
  },
  _setInputValue(value) {
    React.findDOMNode(this.refs.input).innerText = value
  },
  _onFocus(e) {
    React.findDOMNode(this.refs.input).focus()
  },
  _onChange() {
    this.setState({
      value: React.findDOMNode(this.refs.input).innerText,
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.value)
      }
    })
  },
})
