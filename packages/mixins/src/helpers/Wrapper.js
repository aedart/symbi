'use strict';

/**
 * Original mixin reference identifier
 *
 * @type {symbol}
 */
export const WRAPPED_MIXIN = Symbol('wrapped-mixin');

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

        if (!mixin[WRAPPED_MIXIN]) {
            mixin[WRAPPED_MIXIN] = mixin;
        }

        return wrapper;
    }

    /**
     * Unwraps the given wrapper and return original mixin
     *
     * @param {Function} wrapper
     *
     * @return {Function} Defaults to given wrapper, if no original mixin is available
     */
    static unwrap(wrapper) {
        return wrapper[WRAPPED_MIXIN] || wrapper;
    }
}
