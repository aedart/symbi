'use strict';

import Wrapper from '@mixins/helpers/Wrapper';
import { APPLIED_MIXIN } from '@mixins/decorators/Bare';

/**
 * Determine if instance is an "application" (part of) given mixin
 *
 * `isApplicationOf` works by checking that `proto` has a reference to `mixin`
 * as created by `apply`.
 *
 * @param {object} instance
 * @param {Function} mixin
 *
 * @return {boolean}
 */
const isApplicationOf = function (instance, mixin) {
    return instance.hasOwnProperty(APPLIED_MIXIN) && instance[APPLIED_MIXIN] === Wrapper.unwrap(mixin);
};

/**
 * Determine if given instance has mixin
 *
 * @param {object} instance
 * @param {Function} mixin
 *
 * @return {boolean}
 */
const hasMixin = function (instance, mixin) {
    while (instance !== null) {
        if (isApplicationOf(instance, mixin)) {
            return true;
        }

        instance = Object.getPrototypeOf(instance);
    }

    // Nothing found, thus it cannot be instance of given
    return false;
};

/**
 * Applies a Symbol.hasInstance method to support "instance of" checks
 *
 * @mixin
 *
 * @param {Function} mixin
 *
 * @returns {Function}
 */
const HasInstance = (mixin) => {
    // Abort if mixin already has a "has instance" symbol
    if (mixin.hasOwnProperty(Symbol.hasInstance)) {
        return mixin;
    }

    // Set has instance method for mixin
    Object.defineProperty(mixin, Symbol.hasInstance, {
        value: (instance) => {
            return hasMixin(instance, mixin);
            // return checkInstance(instance, mixin);
        }
    });

    return mixin;
};

export default HasInstance;
