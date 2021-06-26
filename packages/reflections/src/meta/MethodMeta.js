import { MethodMeta as Contract } from '@aedart/contracts';
import FunctionMeta from './FunctionMeta';
import mix from '@aedart/mixins';

/**
 * Class Method Meta
 *
 * @implements {Contract}
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
        const target = this.parent.target;
        if (!target) {
            return false;
        }

        const proto = Reflect.getPrototypeOf(target);
        if (!proto) {
            return false;
        }

        return Reflect.has(proto, 'constructor') && proto.constructor === this.target;
    }
}
