<h1 align="center">Welcome to craco-fast-refresh 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/craco-fast-refresh" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/craco-fast-refresh.svg">
  </a>
  <a href="https://www.npmjs.com/package/craco-fast-refresh" target="_blank">
    <img alt="Download Count" src="https://img.shields.io/npm/dm/craco-fast-refresh">
  </a>
  <a href="https://github.com/vimcaw/craco-fast-refresh/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> A Craco plugin to enable &#34;Fast Refresh&#34; (also previously known as Hot Reloading) for React components.

## What is Fast Refresh

React Fast Refresh is a replacement for [React Hot Loader](https://github.com/gaearon/react-hot-loader). Fast refresh makes your React app reloads slick and painless on code changes, providing a great developer experience.

More information: 
- [Fast Refresh · React Native](https://reactnative.dev/docs/fast-refresh#limitations)
- [What the heck is React Fast Refresh \| Marios Fakiolas](https://mariosfakiolas.com/blog/what-the-heck-is-react-fast-refresh/)
- [What is React Fast Refresh?\. This library is going to change your… \| by Mallik Cheripally \| JavaScript In Plain English \| Medium](https://medium.com/javascript-in-plain-english/what-is-react-fast-refresh-f3d1e8401333)

## Install

If you use `yarn`: 
```sh
yarn add -D craco-fast-refresh
```
If you use `npm`: 
```sh
npm i -D craco-fast-refresh
```

## Usage

Add a plugin object to your `plugins` on `craco.config` file: 

```js
const fastRefreshCracoPlugin = require('craco-fast-refresh');

module.exports = () => {
  return {
    plugins: [{ plugin: fastRefreshCracoPlugin }],
  };
};
```

## Author

👤 **vimcaw <vimcaw@gmail.com>**

* Website: https://vimcaw.github.io/blog/
* Twitter: [@vimcawZhu](https://twitter.com/vimcawZhu)
* Github: [@vimcaw](https://github.com/vimcaw)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/vimcaw/craco-fast-refresh/issues). 

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
