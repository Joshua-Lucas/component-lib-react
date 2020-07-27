# @jludev/component-lib-react

> A React Component Library

[![NPM](https://img.shields.io/npm/v/@jludev/component-lib-react.svg)](https://www.npmjs.com/package/@jludev/component-lib-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @jludev/component-lib-react
```

## Documentation

This library is created using styled-components so you will need to pull in styled-components as a dependency to use this library.

Review Styled-Components Docs(https://styled-components.com/)

How to pull in off of npm

```bash
npm install --save styled-components
```

Example of how simple it is to implement a component from this library.

```jsx
import React, { Component } from 'react'
import MyComponent from '@jludev/component-lib-react'

const Example => () {

    return(
      <div>
        <MyComponent />
      <div>
    );

}
```

### Avaiable Components

Here is a list of avaible componets included in the package.

#### Basic Elements

**Form Elements**
Buttons:
  *PrimaryButton
  *SecondaryButton
  *TiriaryButton
Inputs:
  *Input (Props it takes are {label, type, value, event})

#### Commonly used Components

**Forms**
\*SignupForm

### Customize Styles

This library is created using styled-components so the best way to customize each componet to fit your project needs is to pass a theme object to your theme provider.

Example of how to pass your custom theme to your whole app.

```jsx
import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import MyComponent from '@jludev/component-lib-react'

// Your Theme Object
const theme = {
  primaryColor: red;
}

const Example => () {

    return(
      <ThemeProvider theme={theme}>
        <div>
          <MyComponent />
        <div>
      </ThemeProvider>
    );

}
```

#### ThemeFile Keys

For now these are the only aspects of components that can be customized.

```jsx
  const theme = {
  primaryColor: //color
  secondaryColor: //color
  tiriaryColor: //color

  }
```

## License

MIT © [Joshua-Lucas](https://github.com/Joshua-Lucas)
