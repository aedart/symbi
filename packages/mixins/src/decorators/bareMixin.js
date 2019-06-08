'use strict';

import {
    ORIGINAL,
    wrap
} from './../helpers';

/**
 * Current mixin reference
 *
 * @type {symbol}
 */
export const MIXIN_REF = Symbol('mixin-reference');

/**
 * Stores reference to current mixin
 *
 * @param {Function} mixin
 *
 * @returns {Function}
 */
const bareMixin = (mixin) => wrap(mixin, (superClass) => {
    // Apply mixin
    let applied = mixin(superClass);

    // Store reference to original mixin, to enable "instance of" check
    applied.prototype[MIXIN_REF] = mixin[ORIGINAL];

    return applied;
});

export default bareMixin;