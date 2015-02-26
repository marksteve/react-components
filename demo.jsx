var React = require('react')

var rc = require('../')

React.render(
  <rc.SuffixedInput
    className="rc-suffixed-input"
    suffix="apples"
    defaultValue="99"
  />,
  document.getElementById('suffixed-input')
)

