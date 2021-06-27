import { ClassMeta as Contract } from '@aedart/contracts/dist/reflections.esm';
import mix from '@aedart/mixins';
import MetaTarget from '../concerns/MetaTarget';

/**
 * Class Meta
 *
 * @implements module:reflection-contracts.ClassMeta
 */
export default class ClassMeta extends mix()
    .with(MetaTarget)
    .inherit(Contract)
    .make() {
    /**
     * Meta methods
     *
     * @protected
     *
     * @type {MethodMeta[]}
     */
    metaMethods;

    /**
     * ClassMeta
     *
     * @param {Function} target
     * @param {MethodMeta[]} [methods]
     */
    constructor(target, methods = []) {
        super();

        this.defineMetaTarget(target);
        this.metaMethods = methods;
    }

    /**
     * Name of the class
     *
     * @public
     *
     * @return {string|null}
     */
    get name() {
        const target = this.target;
        const proto = Reflect.getPrototypeOf(target);
        if (!proto) {
            return null;
        }

        if (Reflect.has(proto, 'constructor') && proto.constructor.hasOwnProperty('name')) {
            return proto.constructor.name;
        }

        return null;
    }

    /**
     * Class methods
     *
     * @public
     *
     * @return {MethodMeta[]}
     */
    get methods() {
        return this.metaMethods;
    }

    /**
     * Class constructor method
     *
     * @public
     *
     * @return {MethodMeta|null}
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
     * Determine if class has methods
     *
     * @public
     *
     * @return {boolean}
     */
    hasMethods() {
        return this.methods.length > 0;
    }

    /**
     * Determine if class has constructor method declared
     *
     * @public
     *
     * @return {boolean}
     */
    hasConstructor() {
        return this.constructorMethod !== null;
    }
}
