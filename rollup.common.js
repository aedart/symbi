import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
// import replace from '@rollup/plugin-replace';
import eslint from '@rollup/plugin-eslint';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import cleanup from 'rollup-plugin-cleanup';

/**
 * Returns configured babel plugin
 *
 * @return {Plugin}
 */
const makeBabelConfig = () => {
    return babel({ babelHelpers: 'bundled' })
}

/**
 * Returns configured "cleanup" plugin
 *
 * @param {Object} [config]
 *
 * @return {Plugin}
 */
const makeCleanupConfig = (config = {}) => {
    return cleanup(Object.assign({
        comments: 'all',
        compactComments: true
    }, config));
};

/**
 * Returns current package.json
 *
 * @return {object}
 */
export const getPackageSchema = () => {
    const fs = require('fs');

    return JSON.parse(fs.readFileSync('./package.json'));
}

/**
 * Returns a "UMD (Universal Module Definition) - (browser)" export setting
 *
 * @param {object} config
 *
 * @return {object}
 */
export const exportUmd = function( config = {}) {
    const plugins = [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        eslint(),
        makeBabelConfig(),
        makeCleanupConfig()
    ]

    const packageInfo = getPackageSchema();
    const name = packageInfo.name.split('/')[1];

    // Debug
    // console.log('UMD module name', name);

    return Object.assign({
        input: 'src/index.js',
        output: {
            name: name,
            //file: 'dist/index.umd.js',
            file: packageInfo.browser,
            format: 'umd',
            sourcemap: true,
            banner: makeBannerText()
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
        makeBabelConfig(),
        makeCleanupConfig()
    ];

    const packageInfo = getPackageSchema();

    return Object.assign({
        input: 'src/index.js',
        output: {
            //file: 'dist/index.cjs.js',
            file: packageInfo.main,
            format: 'cjs',
            sourcemap: true,
            banner: makeBannerText()
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
        makeBabelConfig(),
        makeCleanupConfig()
    ];

    const packageInfo = getPackageSchema();

    return Object.assign({
        input: 'src/index.js',
        output: {
            // file: 'dist/index.esm.js',
            file: packageInfo.module,
            format: 'es',
            sourcemap: true,
            banner: makeBannerText()
        },
        plugins
    }, config);
};

/**
 * Creates a banner text
 *
 * @return {string}
 */
export const makeBannerText = function() {
    const packageInfo = getPackageSchema();

    const name = packageInfo.name;
    const license = packageInfo.license;

    const date = new Date().getFullYear();

    return `/**
 * ${name}
 * 
 * ${license}, Copyright (c) 2018-${date} Alin Eugen Deac <aedart@gmail.com>
 */`;
}
