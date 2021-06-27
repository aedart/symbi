import Builder from './Builder';

/**
 * Function Meta Builder callback
 *
 * @callback methodMetaCallback
 * @memberOf module:reflection-contracts
 *
 * @param {Function} target
 * @param {MethodBuilder} builder
 *
 * @return {void}
 */

/**
 * Class Meta Builder
 *
 * @interface
 * @export Builder
 * @memberOf module:reflection-contracts
 */
export default class ClassBuilder extends Builder {
    /**
     * Define class method meta
     *
     * @param {Function} target
     * @param {methodMetaCallback} callback
     *
     * @return {ClassBuilder}
     */
    method(target, callback) {}
}
