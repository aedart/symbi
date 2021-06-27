import Builder from './Builder';

/**
 * Function Meta Builder
 *
 * @interface
 * @extends Builder
 * @memberOf module:contracts
 */
export default class FunctionBuilder extends Builder {
    /**
     * Define function parameter meta
     *
     * @param {*|*[]} types Datatype or types (if allows multiple types)
     * @param {*} [defaultValue] Evt. default value
     * @param {string|null} [name] Parameter name
     *
     * @return {FunctionBuilder}
     */
    param(types, defaultValue = undefined, name = null) {}
}
