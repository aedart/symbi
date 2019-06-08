/**
 * Mixin Builder
 *
 * Inspired by Justin Fagnani's Mixwith.js
 *
 * @see http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/
 * @see https://github.com/justinfagnani/mixwith.js
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 */
export default class Builder
{
    /**
     * Create a new Mixin Builder instance
     *
     * @param {Function} [superClass = class {}]
     */
    constructor(superClass)
    {
        this.superClass = superClass || class {};
    }

    /**
     * Mix the super class with one or more mixins
     *
     * @param {Array.<Function>} mixins
     *
     * @returns {Function}
     */
    with(...mixins)
    {
        return mixins.reduce((c, mixin) => {
            return typeof mixin !== 'function' ? c : mixin(c);
        }, this.superClass);
    }
}