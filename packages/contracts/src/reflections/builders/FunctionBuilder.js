import Builder from './Builder';

/**
 * Parameter Meta Builder callback
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
 * Function Meta Builder
 *
 * @interface
 * @export Builder
 */
export default class FunctionBuilder extends Builder {
    /**
     * Define class constructor method meta
     *
     * @param {Function} target
     * @param {paramBuilderCallback} callback
     *
     * @return {self}
     */
    defineConstructor(target, callback) {}

    /**
     * Define class method meta
     *
     * @param {Function} target
     * @param {paramBuilderCallback} callback
     * @param {boolean} [isConstructor]
     *
     * @return {self}
     */
    method(target, callback, isConstructor = false) {}
}
