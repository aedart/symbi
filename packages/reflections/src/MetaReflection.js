import { MetaReflection as Contract, META_REFLECTION_SYMBOL } from '@aedart/contracts/dist/reflections.esm';
import mix from '@aedart/mixins';

/**
 * Meta Reflection
 *
 * @implements module:reflection-contracts.MetaReflection
 */
export default class MetaReflection extends mix()
    .inherit(Contract)
    .make() {
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
     * @return {symbol}
     */
    static get symbol() {
        return META_REFLECTION_SYMBOL;
    }
}
