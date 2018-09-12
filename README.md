![Zero Theme](https://image.ibb.co/g2Jsep/logo.png)
## Introduction
Zero Theme is [Zero Molecule's](https://www.zeromolecule.com) new approach to [React Native](https://facebook.github.io/react-native/) styling which can be overwhelming from time to time. We wanted to be able to use css-like `className` styling instead of writing `{flex: 1}` a million times. Yes, we know this can all be achieved using plain JavaScript, but we prefer this way for it's simplicity and readability.
#### Note
This is a pure styling library, not a UI kit. It is compatible with any component and UI kit available. If you're looking for a UI kit, please check out our [`zero-components`](https://github.com/ZeroMolecule/zero-components) UI kit for React Native

### Features
- **Global style (theme)** containing all classes that themed components use 
- A way to set **default component styles**
- Support for other styling properties like `contentContainerStyle`
- [Flow](https://flow.org) typed props
- Utility and parsing functions so you can use them for yourself
- `withTheme` [High-Order Component](https://reactjs.org/docs/higher-order-components.html) that enables you to wrap any component and make it themeable
- [BEM](http://getbem.com/) inspired way to have subclasses

## Getting started
### Installation
If you want just the components, you need to add the plugin from [npm.js](https://www.npmjs.com/package/react-native-zero-components) using 

  ```bash
  npm install react-native-zero-components --save
  ```

   or if you prefer [yarn](https://yarnpkg.com/)

  ```bash
  yarn add react-native-zero-components
  ```
<br />
<br />

### Create your theme
Your theme is actually a collection of css-like classes and some BEM-like blocks with substyles. Simple theme looks something like this:

```javascript
export default {
  flex: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  'p-24': {
    padding: 24,
  },
  text: {
    color: '#333',
    fontSize: 14,
    '--bold': {
      fontWeight: 'bold',
    },
    '--center': {
      textAlign: 'center',
    },
    '--error': {
      textColor: 'red',
    },
  },
  background: {
    backgroundColor: '#f1f1f1',
    '--dark': {
      backgroundColor: '#333',
    },
    '--light': {
      backgroundColor: '#fff',
    },
  },
};
```

Here you can see that we've added few global classes for all components to use (like `flex`, and `p-24`). In addition to those, we also added come block specific classes like `text` and `background` which have their own styles and subclasses. Their usage is shown below.


## Usage
### Basic
If you just want to wrap your component and maybe set some default classes to it, you use it like this

```jsx
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Theme, withTheme } from 'react-native-zero-theme';
import showcaseTheme from './showcaseTheme';

const ThemedView = withTheme()(View);
const ThemedText = withTheme({ className: ['style', 'text'] })(Text);
const ThemedScrollView = withTheme({
  className: ['style'],
  contentContainerClassName: ['contentContainerStyle'],
})(ScrollView);

const BasicShowcase = () => (
  <Theme.Provider value={showcaseTheme}>
    <ThemedScrollView className="flex" contentContainerClassName="flex flex-grow">
      <ThemedView className="center flex p-24">
        <ThemedText>
          My font size is 14 and color is #333
        </ThemedText>
        <ThemedText className="text--error">
          There is danger ahead! I look just like text above, but my text is red
        </ThemedText>
        <ThemedText className="p-24 text--center text--bold">
          Well that is all good for you, but I am in the center of attention!
        </ThemedText>
      </ThemedView>
    </ThemedScrollView>
  </Theme.Provider>
);
```

## License
Zero Theme is open source and released under the [BSD-3-Clause License](https://opensource.org/licenses/BSD-3-Clause)
