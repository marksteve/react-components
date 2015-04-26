var React = require('react')

var SuffixedInput = React.createClass({displayName: "SuffixedInput",
  getInitialState:function() {
    return {
      suffixLeft: 0,
      value: '',
    }
  },
  componentDidMount:function() {
    this._setValue()
  },
  componentWillReceiveProps:function(nextProps) {
    this._setValue(nextProps.value)
  },
  componentDidUpdate:function(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.setState({
        suffixLeft: (
          React.findDOMNode(this.refs.shadow)
            .getBoundingClientRect().width
        )
      })
    }
  },
  render:function() {
    return (
      React.createElement("div", React.__spread({},  this.props, {style: {
        position: 'relative',
        display: 'inline-block',
        overflow: 'hidden',
      }}), 
        React.createElement("span", {ref: "shadow", style: {
          position: 'absolute',
          visibility: 'hidden',
        }}, 
          this.state.value
        ), 
        React.createElement("span", {className: "suffix", style: {
          position: 'absolute',
          left: this.state.suffixLeft,
        }}, 
          this.props.suffix
        ), 
        React.createElement("input", {
          type: "text", 
          value: this.state.value, 
          defaultValue: this.props.defaultValue, 
          onChange: this._onChange, 
          style: {position: 'relative'}}
        )
      )
    )
  },
  _setValue:function(nextValue) {
    this.setState({
      value: typeof nextValue === 'undefined' ? (
        this.props.value || this.props.defaultValue
      ) : nextValue
    })
  },
  _onChange:function(e) {
    if (this.props.onChange) {
      this.props.onChange(e)
    } else {
      this._setValue(e.target.value)
    }
  },
})

module.exports = SuffixedInput
