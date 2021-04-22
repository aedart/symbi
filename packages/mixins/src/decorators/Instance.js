'use strict';

import { ORIGINAL } from '~/helpers/Wrapper';
import { MIXIN_REF } from '~/decorators/Bare';

/**
 * Checks whether the given instance is part of the
 * prototype chain or not
 *
 * @see Symbol.hasInstance
 *
 * @param {Function|Object} instance
 *
 * @returns {boolean}
 */
const checkInstance = function (instance) {
    // Obtain reference to original
    const original = this[ORIGINAL];

    // Abort if no original reference available,
    // it cannot be an instance of given
    if (!original) {
        return false;
    }

    // Search through the prototype chain, determine if given
    // is an instance of given object.
    while (instance !== null) {
        // Determine of instance of given
        if (instance.hasOwnProperty(MIXIN_REF) && instance[MIXIN_REF] === original) {
            return true;
        }

        // Next prototype ...
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
const Instance = (mixin) => {
    // Abort if mixin already has a "has instance" symbol
    if (mixin.hasOwnProperty(Symbol.hasInstance)) {
        return mixin;
    }

    // Set has instance method for mixin
    Object.defineProperty(mixin, Symbol.hasInstance, {
        value: checkInstance
    });

    return mixin;
};

export default Instance;
