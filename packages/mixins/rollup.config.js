import {
    exportUmd,
    exportCommonJs,
    exportEsModule
} from '../../rollup.common.js';

export default [
    exportUmd(),
    exportCommonJs(),
    exportEsModule()
];
