import { MetaReflection as Contract, META_REFLECTION_SYMBOL } from '@aedart/contracts/dist/reflections.esm';
import FunctionBuilder from './builders/FunctionBuilder';
import mix from '@aedart/mixins';

/**
 * Meta Builder callback
 *
 * @callback metaBuilderCallback
 *
 * @param {Function} target Class, method or function reference
 * @param {module:reflection-contracts.Builder} builder
 *
 * @return {module:reflection-contracts.Builder}
 */

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
     * @public
     *
     * @param {Function} target
     *
     * @return {module:reflection-contracts.ClassMeta|null}
     */
    static ofClass(target) {
        const callback = this.getMetaCallback(target);
        if (!callback) {
            return null;
        }

        // TODO...
    }

    /**
     * Get class method meta
     *
     * @public
     *
     * @param {Function} target
     *
     * @return {module:reflection-contracts.MethodMeta|null}
     */
    static ofMethod(target) {
        const callback = this.getMetaCallback(target);
        if (!callback) {
            return null;
        }

        // TODO...
    }

    /**
     * Get function meta
     *
     * @public
     *
     * @param {Function} target
     *
     * @return {module:reflection-contracts.FunctionMeta|null}
     */
    static ofFunction(target) {
        const callback = this.getMetaCallback(target);
        if (!callback) {
            return null;
        }

        const builder = new FunctionBuilder(target);
        return this.buildMeta(callback, target, builder);
    }

    /**
     * Determine if target has meta defined
     *
     * @public
     *
     * @param {Function} target
     *
     * @return {boolean}
     */
    static has(target) {
        return this.getMetaCallback(target) !== null;
    }

    /**
     * Define meta for given class
     *
     * @public
     *
     * @param {Function} target Class reference
     * @param {module:reflection-contracts.classBuilderCallback} callback
     *
     * @throws {TypeError}
     */
    static defineClass(target, callback) {
        this.assertValidTarget(target, 'Target must be a valid class function');

        this.defineMetaBuilderMethod(target, callback);

        // TODO... should we build to force meta on class methods' prototype?
    }

    /**
     * Define meta for given function
     *
     * @public
     *
     * @param {Function} target Function reference
     * @param {module:reflection-contracts.functionBuilderCallback} callback
     *
     * @throws {TypeError}
     */
    static defineFunction(target, callback) {
        this.assertValidTarget(target);

        this.defineMetaBuilderMethod(target, callback);
    }

    /**
     * Returns the meta reflection symbol
     *
     * @public
     *
     * @return {module:reflection-contracts.META_REFLECTION_SYMBOL}
     */
    static get symbol() {
        return META_REFLECTION_SYMBOL;
    }

    /*****************************************************************
     * Internals
     ****************************************************************/

    /**
     * Executes the given meta callback with target and builder
     *
     * @protected
     *
     * @param {metaBuilderCallback} callback
     * @param {Function} target
     * @param {module:reflection-contracts.Builder} builder
     *
     * @return {module:reflection-contracts.Meta}
     *
     * TODO: Throws annotation!!!
     */
    static buildMeta(callback, target, builder) {
        try {
            callback(target, builder);

            return builder.build();
        } catch (error) {
            // TODO: FAIL with custom exception?
            throw new Error(error.message);
        }
    }

    /**
     * Returns the "meta" callback method, if one is available
     *
     * @protected
     *
     * @param {function|*} target
     *
     * @return {metaBuilderCallback|null}
     */
    static getMetaCallback(target) {
        if (target === null || target === undefined) {
            return null;
        }

        if (target.hasOwnProperty(this.symbol)) {
            return target[this.symbol];
        }

        return null;
    }

    /**
     * Defines meta builder callback on given prototype
     *
     * @protected
     *
     * @param {function|object} target
     * @param {module:reflection-contracts.classBuilderCallback|module:reflection-contracts.functionBuilderCallback} callback
     */
    static defineMetaBuilderMethod(target, callback) {
        Reflect.defineProperty(target, this.symbol, {
            value: callback
        });
    }

    /**
     * Assert target is valid
     *
     * @protected
     *
     * @param {*} target
     * @param {string} [msg]
     */
    static assertValidTarget(target, msg = 'Target must be a valid function') {
        if (typeof target !== 'function') {
            throw new TypeError(msg);
        }
    }
}
