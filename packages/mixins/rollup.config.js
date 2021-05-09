import {
    exportUmd,
    exportCommonJs,
    exportEsModule
} from '../../rollup.common.js';

export default [
    exportUmd('mixins'),
    exportCommonJs(),
    exportEsModule()
];
