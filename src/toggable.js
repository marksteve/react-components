/*
 * <Toggable
 *   toggled={this.state.toggled}
 *   duration={250}
 * />
 *
 */

var React = require('react')
var Velocity = require('velocity-animate/velocity')
require('velocity-animate/velocity.ui')

var Toggable = React.createClass({
  getDefaultProps() {
    return {
      animationIn: 'transition.fadeIn',
      animationOut: 'transition.fadeOut',
      duration: 250
    }
  },
  getInitialState() {
    return {
      toggled: false,
      render: false
    }
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.toggled !== this.props.toggled) {
      if (nextProps.toggled) {
        this.setState({
          toggled: true,
          render: true
        })
      } else {
        this.setState({
          toggled: false
        })
      }
    }
  },
  componentDidUpdate(prevProps, prevState) {
    if (prevState.toggled !== this.state.toggled) {
      if (this.state.toggled) {
        Velocity(
          React.findDOMNode(this),
          this.props.animationIn,
          this.props
        )
      } else {
        Velocity(
          React.findDOMNode(this),
          this.props.animationOut,
          this.props
        ).then(() => {
          this.setState({
            render: false
          })
        })
      }
    }
  },
  render() {
    return (
      this.state.render ? <div {...this.props} /> : null
    )
  }
})

module.exports = Toggable
