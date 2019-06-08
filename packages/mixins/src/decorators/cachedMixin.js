'use strict';

import { wrap } from './../helpers';

/**
 * Cached Mixin reference
 *
 * @type {symbol}
 */
export const CACHED_REF = Symbol('cached-mixin-reference');

/**
 * Prevents that an already applied mixin is applied more than once
 *
 * @param {Function} mixin
 *
 * @returns {Function}
 */
const cachedMixin = (mixin) => wrap(mixin, (superClass) => {
    // Get the cached reference
    let cached = mixin[CACHED_REF];

    // Create cached reference, if none was obtained
    if( ! cached){
        cached = mixin[CACHED_REF] = Symbol(mixin.name);
    }

    // Abort if super class already has mixin
    if(superClass.hasOwnProperty(cached)){
        return superClass[cached];
    }

    // Finally, decorate super class
    let decorated = mixin(superClass);
    superClass[cached] = decorated;

    return decorated;
});

export default cachedMixin;