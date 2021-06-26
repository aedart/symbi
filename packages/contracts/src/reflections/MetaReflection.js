/**
 * Meta Reflection symbol
 *
 * This symbol is used to identify a class, method or function
 * defines meta reflection
 *
 * @type {symbol}
 */
export const META_REFLECTION_SYMBOL = Symbol('meta-reflection');

/**
 * Class Meta Builder callback
 *
 * @name classBuilderCallback
 * @function
 *
 * @param {Function} target Class reference
 * @param {ClassBuilder} builder
 *
 * @return {void}
 */

/**
 * Meta Reflection
 *
 * @interface
 */
export default class MetaReflection {
    /**
     * Get class meta
     *
     * @param {Function} target
     *
     * @return {ClassMeta|null}
     */
    static ofClass(target) {}

    /**
     * Get class method meta
     *
     * @param {Function} target
     *
     * @return {MethodMeta|null}
     */
    static ofMethod(target) {}

    /**
     * Get function meta
     *
     * @param {Function} target
     *
     * @return {FunctionMeta|null}
     */
    static ofFunction(target) {}

    /**
     * Determine if target has meta defined
     *
     * @param {Function} target
     *
     * @return {boolean}
     */
    static has(target) {}

    /**
     * Define meta for given class
     *
     * @param {Function} target Class reference
     * @param {classBuilderCallback} callback
     *
     * @throws {TypeError}
     */
    static defineClass(target, callback) {}

    // TODO: ...
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
