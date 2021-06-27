import { MethodMeta as Contract } from '@aedart/contracts/dist/reflections.esm';
import FunctionMeta from './FunctionMeta';
import mix from '@aedart/mixins';

/**
 * Class Method Meta
 *
 * @implements module:reflection-contracts.MethodMeta
 * @extends FunctionMeta
 */
export default class MethodMeta extends mix(FunctionMeta)
    .inherit(Contract)
    .make() {
    /**
     * Class meta that this method meta belongs to
     *
     * @protected
     *
     * @type {ClassMeta}
     */
    metaParent;

    /**
     * State whether meta is for a class constructor method
     * or not
     *
     * @type {boolean|undefined}
     */
    definedMetaForConstructor;

    /**
     * MethodMeta
     *
     * @param {ClassMeta} meta The class meta that this method meta belongs to
     * @param {Function} target
     * @param {ParameterMeta[]} parameters
     */
    constructor(meta, target, parameters = []) {
        super(target, parameters);

        this.metaParent = meta;
    }

    /**
     * The class meta that this method meta belongs to
     *
     * @public
     *
     * @return {ClassMeta}
     */
    get parent() {
        return this.metaParent;
    }

    /**
     * Determine if method is class constructor
     *
     * @public
     *
     * @return {boolean}
     */
    isConstructor() {
        if (this.definedMetaForConstructor !== undefined) {
            return this.definedMetaForConstructor;
        }

        const target = this.parent.target;
        if (!target) {
            return false;
        }

        const proto = Reflect.getPrototypeOf(target);
        if (!proto) {
            return false;
        }

        this.definedMetaForConstructor = Reflect.has(proto, 'constructor') && proto.constructor === this.target;

        return this.definedMetaForConstructor;
    }
}
