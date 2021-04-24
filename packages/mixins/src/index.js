'use strict';

import Builder from '@mixins/Builder';
import Cached from '@mixins/decorators/Cached';
import Instance from '@mixins/decorators/Instance';
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
        Instance(
            Bare(mixin)
        )
    );
};

/**
 * Mix a super class with one or more mixins
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
 * @param {function} [superClass] Defaults to empty class when
 *                                no super class is given
 *
 * @return {Builder}
 */
const mix = (superClass) => new Builder(superClass);
export default mix;
