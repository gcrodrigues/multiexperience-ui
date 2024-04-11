import typescript from '@rollup/plugin-typescript'
import createConfig from '../../shared/rollup.config.mjs'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

export default createConfig([
	{
		input: './src/index.ts',
		plugins: [
			typescript({ tsconfig: './tsconfig.json' }),
			postcss({
				plugins: [autoprefixer()],
			}),
		],
	},
])
