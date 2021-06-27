import {
    exportUmd,
    exportCommonJs,
    exportEsModule
} from '../../rollup.common.js';

/**
 * Returns export settings for a "sub-module"
 *
 * @param {string} entry Source path to sub-module directory, e.g. 'src/reflections'
 * @param {string} output Sub-module output file name, without file extension, e.g. 'reflections'
 *
 * @return {object}
 */
// const exportSubmodule = (entry, output) => {
//     const umd = exportUmd();
//     umd.input = entry + '/index.js';
//     umd.output.file = 'dist/' + output + '.umd.js';
//
//     const commonJs = exportCommonJs();
//     commonJs.input = entry + '/index.js';
//     commonJs.output.file = 'dist/' + output + '.cjs.js';
//
//     const es = exportEsModule();
//     es.input = entry + '/index.js';
//     es.output.file = 'dist/' + output + '.esm.js';
//
//     return [
//         umd,
//         commonJs,
//         es
//     ];
// };

/**
 * Returns export settings for a "sub-module"
 *
 * @param {string} target Target sub-module directory, e.g. "reflections".
 *                      Expects a "src/reflections/index.js" to exists
 * @return {object}
 */
const exportSubmodule = (target) => {
    const umd = exportUmd();
    umd.input = 'src/' + target + '/index.js';
    umd.output.file = 'dist/' + target + '.umd.js';

    const commonJs = exportCommonJs();
    commonJs.input = 'src/' + target + '/index.js';
    commonJs.output.file = 'dist/' + target + '.cjs.js';

    const es = exportEsModule();
    es.input = 'src/' + target + '/index.js';
    es.output.file = 'dist/' + target + '.esm.js';

    return [
        umd,
        commonJs,
        es
    ];
};

export default [
    // All contracts in a single bundle (could be large...)
    exportUmd(),
    exportCommonJs(),
    exportEsModule(),

    // Individual "sub-modules"
    ...exportSubmodule('reflections'),
    ...exportSubmodule('support')
];
