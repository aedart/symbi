'use strict';

import Builder from './Builder';

/**
 * Original Mixin reference
 *
 * @type {symbol}
 */
export const ORIGINAL = Symbol('original-mixin');

/**
 * Set prototype of wrapper to match given mixin
 *
 * @param {Function} mixin
 * @param {Function} wrapper
 *
 * @returns {Function}
 */
export const wrap = (mixin, wrapper) => {
    Object.setPrototypeOf(wrapper, mixin);

    if( ! mixin[ORIGINAL]){
        mixin[ORIGINAL] = mixin;
    }

    return wrapper;
};

/**
 * Mix a super class with one or more mixins
 *
 * @param {Function} [superClass = class {}]
 *
 * @returns {Builder}
 */
export const mix = (superClass) => new Builder(superClass);