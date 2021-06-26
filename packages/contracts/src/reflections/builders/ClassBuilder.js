import Builder from './Builder';

/**
 * Function Meta Builder callback
 *
 * @name methodMetaCallback
 * @function
 *
 * @param {Function} target
 * @param {FunctionBuilder} builder
 *
 * @return {void}
 */

/**
 * Class Meta Builder
 *
 * @interface
 * @export Builder
 */
export default class ClassBuilder extends Builder {

    /**
     * Define class method meta
     *
     * @param {Function} target
     * @param {methodMetaCallback} callback
     *
     * @return {self}
     */
    method(target, callback) {}
}
