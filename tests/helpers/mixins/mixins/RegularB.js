'use strict';

/**
 * Height reference
 *
 * @type {symbol}
 * @private
 */
const _height = Symbol('height');

/**
 * Regular Mixin B
 *
 * @param {Function} superClass
 *
 * @returns {{new(): RegularB, prototype: RegularB}}
 */
export default (superClass) => class RegularB extends superClass
{
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
}