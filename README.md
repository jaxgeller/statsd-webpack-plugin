# statsd-webpack-plugin
[![](https://img.shields.io/npm/v/statsd-webpack-plugin.svg)](https://www.npmjs.com/package/statsd-webpack-plugin)

Webpack plugin for reporting to statsd

## Usage

```sh
npm install statsd-webpack-plugin -S
```

```js
var StatsDPlugin = require('statsd-webpack-plugin');
module.exports = {
	...
	plugins: [
		new StatsDPlugin()
	]
}
```