Grunt Esquire (plus Mocha and Chai)
===================================

A simple plugin to load the
[Esquire](https://github.com/usrz/javascript-esquire)
library and run [Mocha](http://mochajs.org/).

### Installation

Install with [NPM](http://www.npmjs.com/):

```sh
npm install --save-dev grunt-esquire
```

Then just add the `esquire-mocha` task to your `GruntFile.js`.

```js
'esquire-mocha': {
  'options': { slow: 500 },
  'default': {
    src: [ 'index.js',
           'test/*.js' ]
  }
},
```

### Details

Basically, this little plugin for Grunt will load all the source files,
and wait for any static injection (specified via the `global.esqire(...)` call)
before running Mocha.

### License

[Apache License, Version 2.0](Apache License)
