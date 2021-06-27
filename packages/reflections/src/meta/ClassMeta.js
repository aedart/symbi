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
     * @type {module:reflection-contracts.MethodMeta[]}
     */
    metaMethods;

    /**
     * ClassMeta
     *
     * @param {Function} target
     * @param {module:reflection-contracts.MethodMeta[]} [methods]
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
     * @inheritdoc
     */
    get methods() {
        return this.metaMethods;
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
    hasMethods() {
        return this.methods.length > 0;
    }

    /**
     * @inheritdoc
     */
    hasConstructor() {
        return this.constructorMethod !== null;
    }
}
