import { MetaReflection as Contract } from '@aedart/contracts/dist/reflections.esm';
import mix from '@aedart/mixins';
import Store from './Store';
import ClassBuilder from './builders/ClassBuilder';
import FunctionBuilder from './builders/FunctionBuilder';

/**
 * Meta Reflection
 *
 * @implements module:reflection-contracts.MetaReflection
 */
export default class MetaReflection extends mix()
    .inherit(Contract)
    .make() {
    /**
     * Meta store (map)
     *
     * @private
     *
     * @type {Store}
     */
    static #store = new Store();

    /**
     * Get meta reflections for given target
     *
     * @param {Function} target
     *
     * @return {module:reflection-contracts.ClassMeta|module:reflection-contracts.MethodMeta|module:reflection-contracts.FunctionMeta|null}
     */
    static of(target) {
        const callback = this.#getMetaCallback(target);
        if (!callback) {
            return null;
        }

        try {
            const builder = callback();

            return builder.build();
        } catch (error) {
            // TODO: FAIL with custom exception, e.g. Meta Exception
            throw new Error(error.message);
        }
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
        return this.#store.has(target);
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
        this.#assertValidTarget(target, 'Target must be a valid class function');

        this.#defineMetaBuilderMethod(target, callback, new ClassBuilder(target));

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
        this.#assertValidTarget(target);

        this.#defineMetaBuilderMethod(target, callback, new FunctionBuilder(target));
    }

    /*****************************************************************
     * Internals
     ****************************************************************/

    /**
     * Returns the "meta" callback method, if one is available
     *
     * @private
     *
     * @param {function|*} target
     *
     * @return {function}
     */
    static #getMetaCallback(target) {
        const callback = this.#store.get(target);
        if (callback === undefined) {
            return null;
        }

        return callback;
    }

    /**
     * Defines meta builder callback on given prototype
     *
     * @private
     *
     * @param {function|object} target
     * @param {module:reflection-contracts.classBuilderCallback|module:reflection-contracts.functionBuilderCallback} callback
     * @param {module:reflection-contracts.Builder} builder
     */
    static #defineMetaBuilderMethod(target, callback, builder) {
        this.#store.set(target, () => {
            callback(builder, target);

            return builder;
        });
    }

    /**
     * Assert target is valid
     *
     * @private
     *
     * @param {*} target
     * @param {string} [msg]
     */
    static #assertValidTarget(target, msg = 'Target must be a valid function') {
        if (typeof target !== 'function') {
            throw new TypeError(msg);
        }
    }
}
