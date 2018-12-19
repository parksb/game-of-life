const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
	sourceMap: false,
	webpack(config, options) {
		config.module.rules.push({
			test: /\.scss$/,
			use: [
				{
					loader: 'babel-loader',
					options: {
						babelrc: false,
						plugins: [
							require.resolve('styled-jsx/babel')
						]
					}
				},
				'styled-jsx-css-loader'
			]
		});
		return config
	}
});
