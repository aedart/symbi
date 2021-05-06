'use strict';

import Builder from '@mixins/Builder';
import Cached from '@mixins/decorators/Cached';
import HasInstance from '@mixins/decorators/HasInstance';
import Bare from '@mixins/decorators/Bare';

/**
 * Declare a mixin class
 *
 * Example:
 * ```
 * declare((superClass) => class MyMixin extends superClass {
 *    // ... remaining not shown ...
 * });
 * ```
 *
 * @param {Function} mixin
 *
 * @return {Function}
 */
export const declare = (mixin) => {
    return Cached(
        HasInstance(
            Bare(mixin)
        )
    );
};

/**
 * Mix a base class with one or more mixins
 *
 * Example:
 * ```
 * class Knight extends mix(Player).with(
 *     HasSwordMixin,
 *     HasShieldMixin,
 *     HasArmorMixin
 * ) {
 *     // ...remaining not shown...
 * }
 * ```
 *
 * @param {function} [baseClass] Defaults to empty class when
 *                                no base class is given
 * @param {...Function} [inheritFrom] Classes to inherit from
 *
 * @return {Builder}
 */
const mix = (baseClass, ...inheritFrom) => new Builder(baseClass, ...inheritFrom);
export default mix;
