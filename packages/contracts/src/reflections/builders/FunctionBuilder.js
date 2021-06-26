import Builder from './Builder';

/**
<<<<<<< Updated upstream
 * Function Meta Builder callback
=======
<<<<<<< HEAD
 * Parameter Meta Builder callback
>>>>>>> Stashed changes
 *
 * @name paramBuilderCallback
 * @function
 *
 * @param {Function} target
 * @param {ParameterBuilder} builder
 *
 * @return {void}
 */

/**
=======
>>>>>>> parent of dd65460... Rename builders
 * Function Meta Builder
 *
 * @interface
 * @extends Builder
 */
export default class FunctionBuilder extends Builder {
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
