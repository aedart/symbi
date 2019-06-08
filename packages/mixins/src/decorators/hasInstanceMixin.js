'use strict';

import { ORIGINAL } from './../helpers';
import { MIXIN_REF } from './bareMixin';

/**
 * Has Instance Of Symbol method
 *
 * @param {Function} instance
 *
 * @returns {boolean}
 */
const hasInstanceMethod = function(instance){
    // Obtain reference to original
    let original = this[ORIGINAL];

    // Abort if no original reference available,
    // it cannot be an instance of given
    if( ! original){
        return false;
    }

    // Search through the prototype chain, determine if given
    // is an instance of given object.
    while(instance !== null){
        // Determine of instance of given
        if(instance.hasOwnProperty(MIXIN_REF) && instance[MIXIN_REF] === original){
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
 * @param {Function} mixin
 *
 * @returns {Function}
 */
const hasInstanceMixin = (mixin) => {
    // Abort if mixin already has a "has instance" symbol
    if(mixin.hasOwnProperty(Symbol.hasInstance)){
        return mixin;
    }

    // Set has instance method for mixin
    Object.defineProperty(mixin, Symbol.hasInstance, {
        value: hasInstanceMethod
    });

    return mixin;
};

export default hasInstanceMixin;