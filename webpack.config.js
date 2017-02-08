module.exports = {
	// file to be compiled
  output: {
	// name of the outputted compiled file
    filename: 'react_test_bundle.js'
  },
  module: {
    loaders: [
		// specifies which files need to be transpiled by babel-loader, e.g. .js, .jsx
      	{ test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      	{ test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ }
	//   if using separate CSS would need CSS loader (find in webpack documentation)
    	]
  }

}
// babel compiles jsx and es6 to es5
// webpack bundles js files based on imports/requires
// gulp saves resulting bundled/compiled code
