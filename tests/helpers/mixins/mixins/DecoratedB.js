'use strict';

import { declare } from '@aedart/mixins';

/**
 * Height reference
 *
 * @type {symbol}
 * @private
 */
const _height = Symbol('height');

/**
 * Decorated Mixin B
 *
 * @return {{new(): DecoratedB, prototype: DecoratedB}}
 */
export default declare((superClass) => class DecoratedB extends superClass {

    /**
     * Set height
     *
     * @param {number} height
     */
    set height(height)
    {
        this[_height] = height;
    }

    /**
     * Get height
     *
     * @returns {number|undefined}
     */
    get height()
    {
        return this[_height];
    }
});