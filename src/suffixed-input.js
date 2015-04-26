var React = require('react')

var SuffixedInput = React.createClass({
  getInitialState() {
    return {
      suffixLeft: 0,
      value: '',
    }
  },
  componentDidMount() {
    this._setValue()
  },
  componentWillReceiveProps(nextProps) {
    this._setValue(nextProps.value)
  },
  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.setState({
        suffixLeft: (
          React.findDOMNode(this.refs.shadow)
            .getBoundingClientRect().width
        )
      })
    }
  },
  render() {
    return (
      <div {...this.props} style={{
        position: 'relative',
        display: 'inline-block',
        overflow: 'hidden',
      }}>
        <span ref="shadow" style={{
          position: 'absolute',
          visibility: 'hidden',
        }}>
          {this.state.value}
        </span>
        <span className="suffix" style={{
          position: 'absolute',
          left: this.state.suffixLeft,
        }}>
          {this.props.suffix}
        </span>
        <input
          type="text"
          value={this.state.value}
          defaultValue={this.props.defaultValue}
          onChange={this._onChange}
          style={{position: 'relative'}}
        />
      </div>
    )
  },
  _setValue(nextValue) {
    this.setState({
      value: typeof nextValue === 'undefined' ? (
        this.props.value || this.props.defaultValue
      ) : nextValue
    })
  },
  _onChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e)
    } else {
      this._setValue(e.target.value)
    }
  },
})

module.exports = SuffixedInput
