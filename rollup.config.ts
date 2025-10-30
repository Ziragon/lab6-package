import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import alias from '@rollup/plugin-alias';

const peerDepsOptions = {};

const jsConfig = {
    input: 'src/index.ts',
    output: [
        { file: 'dist/index.cjs.js', format: 'cjs', sourcemap: true },
        { file: 'dist/index.esm.js', format: 'esm', sourcemap: true },
    ],
    plugins: [
        peerDepsExternal(peerDepsOptions),
        resolve(),
        commonjs(),
        typescript({
            tsconfig: './tsconfig.json',
        }),
        postcss({ modules: true }),
    ],
    external: ['react', 'react-dom'],
};

const dtsConfig = {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [
        alias({
            entries: [
                { find: '@', replacement: '.' }
            ]
        }),
        resolve(),
        dts(),
    ],
};

export default [jsConfig, dtsConfig];