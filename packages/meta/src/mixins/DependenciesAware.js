import { declare } from '@aedart/mixins';

/**
 * Dependencies reference
 *
 * @type {symbol}
 * @private
 */
const _dependencies = Symbol('dependencies');

/**
 * Dependencies Aware Mixin
 *
 * @return {{new(): DependenciesAware, prototype: DependenciesAware}}
 */
export default declare((superClass) => class DependenciesAware extends superClass {

    /**
     * Set dependencies
     *
     * @param {Array.<*>|undefined} dependencies Various component dependencies
     */
    set dependencies(dependencies) {
        this[_dependencies] = dependencies;
    }

    /**
     * Get dependencies
     *
     * @return {Array.<*>|undefined} Various component dependencies
     */
    get dependencies() {
        if (!this.hasDependencies()) {
            this.dependencies = this.defaultDependencies;
        }
        return this[_dependencies];
    }

    /**
     * Check if "dependencies" has been set
     *
     * @return {boolean}
     */
    hasDependencies() {
        return this[_dependencies] !== undefined;
    }

    /**
     * Get a default "dependencies"
     *
     * @return {Array.<*>|undefined} A default "dependencies" value or undefined if none is available
     */
    get defaultDependencies() {
        return [];
    }
});