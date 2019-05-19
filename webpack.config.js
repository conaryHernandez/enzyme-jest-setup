const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [
					path.resolve(__dirname, '/src')
				],
				loader: 'eslint',
				exclude: /node_modules/
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
      {
        test:/\.(s*)css$/,
				exclude: /node_modules$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
      }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	]
}
