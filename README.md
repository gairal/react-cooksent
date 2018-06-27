# CookSent

React component wrapper for https://github.com/gairal/cooksent

> Developped with [Babel](https://babeljs.io), [webpack](http://webpack.github.io), [Jest](https://facebook.github.io/jest/) and :heart:

## Usage
Here is the simplest way to init and use the cookie consent.
You can find more examples in the `examples/` directory of this repo.

``` js
import React from 'react';
import { render } from 'react-dom';
import ReactCooksent from 'react-cooksent';

render(
    <ReactCooksent />
    , document.getElementById('root'),
);
```

---

# Table of Contents
* [Installation](#installation)
* [Logging](#logging)
* [Contribute](#contribute)
    * [File structure](#file-structure)
    * [Getting Started](#getting-started)
        * [Dependencies](#dependencies)
        * [Installing](#installing)
        * [Running the app](#running-the-app)
* [License](#license)

## Installation
```
npm install react-cooksent
```
```
yarn add react-cooksent
```

## ReactConsent Props
Default values are the ones from https://github.com/gairal/cooksent.
``` js
{
    <ReactCooksent
        selector="custom title"
        btnSelector="custom title"
        title="custom title"
        description="custom description"
        btnLabel="Oki"
        storageKey="COOKSENT2"
        force
    />
}
```

### selector
Main popin section class selector

### btnSelector
Consent button class selector

### title
Popin title

### description
Popin description

### btnLabel
Popin button label

### storageKey
Key used in local storage to memorise the user consent

### onConsent
onConsent expects a function that will be executed when the user clicks on the consent button.

### force
force expects a boolean.
If `true`, the popin will be injected in dom even if the user already opted-in.

## Contribute
### File structure
```
cooksent/
 ├──src/                             * our source files that will be compiled to javascript
 |   ├──app/                         * Lib sources
 │   │
 |   └──examples/                    * examples sources
 │       ├──index.pug                * our index.html
 │       │
 │       ├──html/                    * where you keep your pug templates
 │       │   └──layout.pug           * the main pug layout
 │       │
 │       └──app/                     * JavaScript/ES2015 files
 │
 ├──test/                            * Jest test definitions
 │
 ├──webpack/                         * Webpack configuration files
 │   ├──webpack.config.base.js       * Base config
 │   ├──webpack.config.js            * Development overrides
 │   └──webpack.config.prod.js       * Production overrides
 │
 └──package.json                     * package.json
```
### Getting Started
#### Dependencies
You need to install the following on you system
* `node` and `npm`
* Ensure you running Node version >= 8.0.0

#### Installing
* `fork` the github repo [https://github.com/gairal/cooksent](https://github.com/gairal/cooksent)
* `clone` your fork
* `npm install` to install all dependencies
* `make start` or `npm start` to start the dev server

#### Running the app
After all dependencies are installed, just run `make start` to start a local server using `webpack-dev-server` which will watch your files and build them.
webpack-dev-server will display the address and port of your server (by default, `http://0.0.0.0:3000`).

### Build commands
#### Server
```bash
# build files then launch the server and watch files
make start
```
#### Build files
```bash
# build files in ./build/ (Webpack, Sass, Pug) and validate them
make build
# "compile" files in ./dist/
# minify and concatenate assets
make release
```
#### Validate files
```bash
# runs the validations eslint and jest tests
make test
```

## License
[MIT](/LICENSE.md)

#### Author: [Frank Gairal]

[Frank Gairal]: http://github.com/gairal
