/**
 * Class Meta Builder callback
 *
 * @callback classBuilderCallback
 * @memberOf module:reflection-contracts
 *
 * @param {module:reflection-contracts.ClassBuilder} builder
 * @param {Function} target Class reference
 *
 * @return {module:reflection-contracts.ClassBuilder}
 */

/**
 * Function Meta Builder callback
 *
 * @callback functionBuilderCallback
 * @memberOf module:reflection-contracts
 *
 * @param {module:reflection-contracts.FunctionBuilder} builder
 * @param {Function} target Function reference
 *
 * @return {module:reflection-contracts.FunctionBuilder}
 */

/**
 * Meta Reflection
 *
 * @interface
 * @memberOf module:reflection-contracts
 */
export default class MetaReflection {

    /**
     * Get meta reflections for given target
     *
     * @param {Function} target
     *
     * @return {module:reflection-contracts.ClassMeta|module:reflection-contracts.MethodMeta|module:reflection-contracts.FunctionMeta|null}
     */
    static of(target) {}

    /**
     * Determine if target has meta defined
     *
     * @public
     *
     * @param {Function} target
     *
     * @return {boolean}
     */
    static has(target) {}

    /**
     * Define meta for given class
     *
     * @public
     *
     * @param {Function} target Class reference
     * @param {classBuilderCallback} callback
     *
     * @throws {TypeError}
     */
    static defineClass(target, callback) {}

    /**
     * Define meta for given function
     *
     * @public
     *
     * @param {Function} target Function reference
     * @param {functionBuilderCallback} callback
     *
     * @throws {TypeError}
     */
    static defineFunction(target, callback) {}
}
