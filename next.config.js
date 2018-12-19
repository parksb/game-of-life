const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
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
				'styled-jsx-css-loader',
				{ loader: 'sass-loader', options: { sourceMap: false } }
			]
		});
		return config
	}
});
