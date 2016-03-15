var path = require('path');
var StatsDPlugin = require('../');

module.exports = {
  entry: {
    main: path.join(__dirname, 'app', 'index.js'),
    main2: path.join(__dirname, 'app', 'index2.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new StatsDPlugin({
      doneCallback: function (stats) {
        console.log(stats);
      }
    })
  ]
}