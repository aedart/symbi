'use strict';

import Wrapper from '@mixins/helpers/Wrapper';

/**
 * Current mixin reference identifier
 *
 * @type {symbol}
 */
export const APPLIED_MIXIN = Symbol('applied-mixin');

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
    const applied = mixin(superClass);

    // Store reference to original mixin
    applied.prototype[APPLIED_MIXIN] = Wrapper.unwrap(mixin);

    return applied;
});

export default Bare;
