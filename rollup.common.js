import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
// import replace from '@rollup/plugin-replace';
import eslint from '@rollup/plugin-eslint';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

/**
 * Returns configured babel plugin
 *
 * @return {Plugin}
 */
const makeBabelConfig = () => {
    return babel({ babelHelpers: 'bundled' })
}

/**
 * Returns a "UMD (Universal Module Definition) - (browser)" export setting
 *
 * @apram {string} name Module name
 * @param {object} config
 *
 * @return {object}
 */
export const exportUmd = function(name, config = {}) {
    const plugins = [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        eslint(),
        makeBabelConfig()
    ]

    return Object.assign({
        input: 'src/index.js',
        output: {
            name: name,
            file: 'dist/index.umd.js',
            format: 'umd',
            sourcemap: true
        },
        plugins
    }, config);
};

/**
 * Returns a "Common Js - (main)" export setting
 *
 * @param {object} config
 *
 * @return {object}
 */
export const exportCommonJs = function(config = {}) {
    const plugins =  [
        peerDepsExternal(),
        eslint(),
        makeBabelConfig()
    ];

    return Object.assign({
        input: 'src/index.js',
        output: {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            sourcemap: true
        },
        plugins
    }, config);
};

/**
 * Returns a "ES Module - (module)" export setting
 *
 * @param {object} config
 *
 * @return {object}
 */
export const exportEsModule = function(config = {}) {
    const plugins = [
        peerDepsExternal(),
        eslint(),
        makeBabelConfig()
    ];

    return Object.assign({
        input: 'src/index.js',
        output: {
            file: 'dist/index.esm.js',
            format: 'es',
            sourcemap: true
        },
        plugins
    }, config);
};
