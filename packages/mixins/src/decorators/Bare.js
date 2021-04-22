"use strict";

import {
    ORIGINAL,
    default as Wrapper
} from "~/helpers/Wrapper";

/**
 * Current mixin reference identifier
 *
 * @type {symbol}
 */
export const MIXIN_REF = Symbol('mixin-reference');

/**
 * Stores reference to current mixin
 *
 * @mixin
 *
 * @param {Function} mixin
 *
 * @return {Function}
 */
const Bare = (mixin) => Wrapper.wrap(mixin, (superClass) => {
    // Apply mixin
    let applied = mixin(superClass);

    // Store reference to original mixin
    applied.prototype[MIXIN_REF] = mixin[ORIGINAL];

    return applied;
});

export default Bare;
