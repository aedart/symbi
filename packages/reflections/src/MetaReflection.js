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
 * @return {void}
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
     * @inheritdoc
     */
    static ofClass(target) {
        const callback = this.getMetaCallback(target);
        if (!callback) {
            return null;
        }

        // TODO...
    }

    /**
     * @inheritdoc
     */
    static ofMethod(target) {
        const callback = this.getMetaCallback(target);
        if (!callback) {
            return null;
        }

        // TODO...
    }

    /**
     * @inheritdoc
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
     * @inheritdoc
     */
    static has(target) {
        return this.getMetaCallback(target) !== null;
    }

    /**
     * @inheritdoc
     */
    static defineClass(target, callback) {
        this.assertValidTarget(target, 'Target must be a valid class function');

        const proto = this.obtainTargetPrototype(target);
        this.defineMetaBuilderMethod(proto, callback);

        // TODO... should we build to force meta on class methods' prototype?
    }

    /**
     * @inheritdoc
     */
    static defineFunction(target, callback) {
        this.assertValidTarget(target);

        const proto = this.obtainTargetPrototype(target);
        this.defineMetaBuilderMethod(proto, callback);
    }

    /**
     * @inheritdoc
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

        return this.getMetaCallback(Reflect.getPrototypeOf(target));
    }

    /**
     * Defines meta builder callback on given prototype
     *
     * @protected
     *
     * @param {object} proto Prototype
     * @param {metaBuilderCallback} callback
     */
    static defineMetaBuilderMethod(proto, callback) {
        Reflect.defineProperty(proto, this.symbol, {
            value: callback
        });
    }

    /**
     * Returns target's prototype
     *
     * @protected
     *
     * @param {Function} target
     *
     * @return {object} Prototype of target
     *
     * @throws {TypeError} If unable to obtain prototype
     */
    static obtainTargetPrototype(target) {
        const proto = Reflect.getPrototypeOf(target);
        if (!proto) {
            throw new TypeError('Unable to obtain prototype of target. Meta cannot be defined');
        }

        return proto;
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
