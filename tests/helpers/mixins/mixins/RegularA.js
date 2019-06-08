'use strict';

/**
 * With reference
 *
 * @type {symbol}
 * @private
 */
const _width = Symbol('width');

/**
 * Regular Mixin A
 *
 * @param {Function} superClass
 *
 * @returns {{new(): RegularA, prototype: RegularA}}
 */
export default (superClass) => class RegularA extends superClass
{
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
}