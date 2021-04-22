'use strict';

/**
 * Original mixin reference identifier
 *
 * @type {symbol}
 */
export const ORIGINAL = Symbol('original-mixin');

/**
 * Wrapper
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 */
export default class Wrapper {
    /**
     * Set prototype of wrapper to match given mixin
     *
     * @param {Function} mixin
     * @param {Function} wrapper
     *
     * @return {Function}
     */
    static wrap(mixin, wrapper) {
        Object.setPrototypeOf(wrapper, mixin);

        if (!mixin.hasOwnProperty(ORIGINAL)) {
            mixin[ORIGINAL] = mixin;
        }

        return wrapper;
    }
}
