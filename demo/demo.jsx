import React from 'react'
import rc from '../src'

var Demo = React.createClass({
  render() {
    return (
      <div>

        <h3 id="suffixed-input">Suffixed Input</h3>
        <pre>
          <code>{atob('PHJjLlN1ZmZpeGVkSW5wdXQgc3VmZml4PSIlIiBkZWZhdWx0VmFsdWU9Ijk5IiAvPg==')}</code>
        </pre>
        <rc.SuffixedInput suffix="%" defaultValue="99" />

      </div>
    )
  }
})

React.render(
  <Demo />,
  document.getElementById('demo')
)
