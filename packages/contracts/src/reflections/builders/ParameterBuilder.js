import Builder from './Builder';

/**
 * Parameter Meta Builder
 *
 * @interface
 * @extends Builder
 */
export default class ParameterBuilder extends Builder {
    /**
     * Define function parameter meta
     *
     * @param {*|*[]} types Datatype or types (if allows multiple types)
     * @param {*} [defaultValue] Evt. default value
     * @param {string|null} [name] Parameter name
     *
     * @return {self}
     */
    param(types, defaultValue = undefined, name = null) {}
}
