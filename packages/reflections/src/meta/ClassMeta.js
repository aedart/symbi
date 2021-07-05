import { ClassMeta as Contract } from '@aedart/contracts/dist/reflections.esm';
import mix from '@aedart/mixins';
import MetaTarget from '../concerns/MetaTarget';

/**
 * Class Meta
 *
 * @implements module:reflection-contracts.ClassMeta
 * @implements module:support-contracts.Freezable
 */
export default class ClassMeta extends mix()
    .inherit(Contract)
    .with(MetaTarget) {
    /**
     * Meta methods
     *
     * @protected
     *
     * @type {module:reflection-contracts.MethodMeta[]}
     */
    #metaMethods;

    /**
     * ClassMeta
     *
     * @param {Function} target
     * @param {module:reflection-contracts.MethodMeta[]} [methods]
     */
    constructor(target, methods = []) {
        super();

        this.defineMetaTarget(target);
        this.#metaMethods = this.resolveMethods(methods);
    }

    /**
     * @inheritdoc
     */
    get name() {
        const target = this.target;

        if (target.hasOwnProperty('prototype') &&
            target.prototype.hasOwnProperty('constructor') &&
            target.prototype.constructor.hasOwnProperty('name')
        ) {
            return target.prototype.constructor.name;
        }

        return null;
    }

    /**
     * @inheritdoc
     */
    get methods() {
        return this.#metaMethods;
    }

    /**
     * @inheritdoc
     */
    hasMethods() {
        return this.methods.length > 0;
    }

    /**
     * @inheritdoc
     */
    withMethods(methods = []) {
        return new this(
            this.target,
            methods
        );
    }

    /**
     * @inheritdoc
     */
    get constructorMethod() {
        for (const method of this.methods) {
            if (method.isConstructor()) {
                return method;
            }
        }

        return null;
    }

    /**
     * @inheritdoc
     */
    hasConstructor() {
        return this.constructorMethod !== null;
    }

    /*****************************************************************
     * Internals
     ****************************************************************/

    /**
     * Resolves the meta methods
     *
     * @protected
     *
     * @param {module:reflection-contracts.MethodMeta[]} methods
     *
     * @return {module:reflection-contracts.MethodMeta[]}
     */
    resolveMethods(methods) {
        return methods.map((method) => {
            if (method.hasOwnProperty('withParent') && typeof method.withParent === 'function') {
                return method.withParent(this);
            }

            return method;
        });
    }
}
