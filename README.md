# react-components

A collection of React components

## Install

```bash
npm install marksteve/react-components
```

## Usage

```javascript
var rc = require('react-components');
```

## Toggable

Toggle through the `toggled` property

```html
<rc.Toggable
  className="overlay"
  toggled={this.state.overlayVisible}
/>
```

Define animation using the `animationIn/Out` properties.
It uses the [Velocity](velocityjs.org) library for animation
so you can do something like this:

```html
<rc.Toggable animationIn={{opacity: 1}} />
```

You can also specify options for the animation as properties.

```html
<rc.Toggable duration={1000} />
```

### Default properties

```json
{
  "className": null,
  "animationIn": "transition.fadeIn",
  "animationOut": "transition.fadeOut",
  "duration": 250
}
```

[Demo](#)

## License

[MIT License](http://marksteve.mit-license.org)

