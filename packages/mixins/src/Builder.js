'use strict';

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
export default class Builder {
    /**
     * Create new Mixin Builder instance
     *
     * @param {Function} [superClass] Defaults to empty class when
     *                                no super class is given
     */
    constructor(superClass) {
        this.superClass = superClass || class {};
    }

    /**
     * Mix the super class with one or more mixins
     *
     * @param {...Function} mixins
     *
     * @return {Function}
     */
    with(...mixins) {
        return mixins.reduce((constructorFn, mixin) => {
            return (typeof mixin !== 'function')
                ? constructorFn
                : mixin(constructorFn);
        }, this.superClass);
    }
}
