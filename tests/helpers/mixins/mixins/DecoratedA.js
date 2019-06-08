'use strict';

import { declare } from '@aedart/mixins';

/**
 * With reference
 *
 * @type {symbol}
 * @private
 */
const _width = Symbol('width');

/**
 * Decorated Mixin A
 *
 * @return {{new(): DecoratedA, prototype: DecoratedA}}
 */
export default declare((superClass) => class DecoratedA extends superClass {

    /**
     * Set width
     *
     * @param {number} width
     */
    set width(width)
    {
        this[_width] = width;
    }

    /**
     * Get width
     *
     * @returns {number|undefined}
     */
    get width()
    {
        return this[_width];
    }
});