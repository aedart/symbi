'use strict';

import Wrapper from '@mixins/helpers/Wrapper';

/**
 * Cached mixin reference identifier
 *
 * @type {symbol}
 */
export const CACHED_REF = Symbol('cached-mixin-reference');

/**
 * Prevents that an already applied mixin is applied more than once
 *
 * @param {Function} mixin
 *
 * @return {Function}
 */
const Cached = (mixin) => Wrapper.wrap(mixin, (superClass) => {
    // Get or create cached reference map
    let cached = superClass[CACHED_REF];
    if (!cached) {
        cached = superClass[CACHED_REF] = new WeakMap();
    }

    // Get cached mixin, if available
    let decorated = cached.get(mixin);
    if (!decorated) {
        decorated = mixin(superClass);
        cached.set(mixin, decorated);
    }

    return decorated;
});

export default Cached;
