/**
 * Meta Reflection symbol
 *
 * This symbol is used to identify a class, method or function
 * defines meta reflection
 *
 * @type {symbol}
 * @memberOf module:reflection-contracts
 */
export const META_REFLECTION_SYMBOL = Symbol('meta-reflection');

/**
 * Class Meta Builder callback
 *
 * @callback classBuilderCallback
 * @memberOf module:reflection-contracts
 *
 * @param {Function} target Class reference
 * @param {module:reflection-contracts.ClassBuilder} builder
 *
 * @return {module:reflection-contracts.ClassBuilder}
 */

/**
 * Function Meta Builder callback
 *
 * @callback functionBuilderCallback
 * @memberOf module:reflection-contracts
 *
 * @param {Function} target Function reference
 * @param {module:reflection-contracts.FunctionBuilder} builder
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
     * Get class meta
     *
     * @public
     *
     * @param {Function} target
     *
     * @return {module:reflection-contracts.ClassMeta|null}
     */
    static ofClass(target) {}

    /**
     * Get class method meta
     *
     * @public
     *
     * @param {Function} target
     *
     * @return {module:reflection-contracts.MethodMeta|null}
     */
    static ofMethod(target) {}

    /**
     * Get function meta
     *
     * @public
     *
     * @param {Function} target
     *
     * @return {module:reflection-contracts.FunctionMeta|null}
     */
    static ofFunction(target) {}

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

    /**
     * Returns the meta reflection symbol
     *
     * @public
     *
     * @return {META_REFLECTION_SYMBOL}
     */
    static get symbol() {}
}
