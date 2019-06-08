import InvalidTarget from './../errors/InvalidData';

/**
 * Meta Data reference
 *
 * @type {symbol}
 * @private
 */
const _data = Symbol('meta-data');

/**
 * Meta Target reference
 *
 * @type {symbol}
 * @private
 */
const _target = Symbol('meta-target');

/**
 * Meta Data
 *
 * Stores arbitrary data about a given target
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 */
export default class Data
{
    /**
     * Create new instance
     *
     * @param {Function|Object} target
     * @param {object} [data = {}]
     *
     * @throws {InvalidTarget} If target is invalid
     */
    constructor(target, data = {})
    {
        this.target = target;
        this.data = data;
    }

    /**
     * Set the target
     *
     * @param {Function|Object} target
     *
     * @throws {InvalidTarget} If target is invalid
     */
    set target(target)
    {
        let type = typeof target;
        if( ! (type === 'function' || type === 'object')){
            throw new InvalidTarget('Target must be either a Function or Object');
        }

        this[_target] = target;
    }

    /**
     * Get the target
     *
     * @returns {Function|Object}
     */
    get target()
    {
        return this[_target];
    }

    /**
     * Set data
     *
     * @param {object} data Key-value pair
     */
    set data(data)
    {
        this[_data] = data;
    }

    /**
     * Get data
     *
     * @returns {object} Key-value pair
     */
    get data()
    {
        return this[_data];
    }
}