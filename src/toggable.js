/*
 * <Toggable
 *   toggled={this.state.toggled}
 *   duration={250}
 * />
 *
 */

var React = require('react/addons');
var Velocity = require('velocity-animate/velocity');
require('velocity-animate/velocity.ui');

module.exports = React.createClass({
  displayName: 'Toggable',
  getDefaultProps: function() {
    return {
      animationIn: 'transition.fadeIn',
      animationOut: 'transition.fadeOut',
      duration: 250
    };
  },
  getInitialState: function() {
    return {
      toggled: false,
      render: false
    };
  },
  componentWillReceiveProps: function(nextProps) {
    if (nextProps.toggled !== this.props.toggled) {
      if (nextProps.toggled) {
        this.setState({
          toggled: true,
          render: true
        });
      } else {
        this.setState({
          toggled: false
        });
      }
    }
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (prevState.toggled !== this.state.toggled) {
      if (this.state.toggled) {
        Velocity(
          this.getDOMNode(),
          this.props.animationIn,
          this.props
        );
      } else {
        Velocity(
          this.getDOMNode(),
          this.props.animationOut,
          React.addons.update(
            this.props,
            {
              $merge: {
                complete: (function() {
                  this.setState({
                    render: false
                  });
                }).bind(this)
              }
            }
          )
        );
      }
    }
  },
  render: function() {
    return (
      this.state.render ? <div {...this.props} /> : null
    );
  }
});
