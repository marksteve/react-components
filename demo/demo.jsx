var React = require('react')

var rc = require('../')

var ToggableDemo = React.createClass({
  getInitialState() {
    return {
      toggled: false
    }
  },
  render() {
    return (
      <div>
        <rc.Toggable
          className="rc-toggable"
          toggled={this.state.toggled}
        />
        <button onClick={this._toggle}>
          Toggle
        </button>
      </div>
    )
  },
  _toggle() {
    this.setState({toggled: !this.state.toggled})
  },
})

var Demo = React.createClass({
  render() {
    return (
      <div>

        <h3 id="toggable">Toggable</h3>
        <ToggableDemo />

        <h3 id="suffixed-input">Suffixed Input</h3>
        <rc.SuffixedInput
          className="rc-suffixed-input"
          suffix="%"
          defaultValue="99"
        />

      </div>
    )
  }
})

React.render(
  <Demo />,
  document.getElementById('demo')
)
