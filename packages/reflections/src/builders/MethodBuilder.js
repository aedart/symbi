import { MethodMetaBuilder as Contract } from '@aedart/contracts/dist/reflections.esm';
import mix from '@aedart/mixins';
import FunctionBuilder from './FunctionBuilder';
import MethodMeta from '../meta/MethodMeta';

/**
 * Meta Method Builder
 *
 * @implements module:reflection-contracts.MethodBuilder
 * @extends FunctionBuilder
 */
export default class MethodBuilder extends mix(FunctionBuilder)
    .inherit(Contract)
    .make() {
    /**
     * The parent meta class
     *
     * @type {module:reflection-contracts.ClassMeta}
     */
    metaParent;

    /**
     * MethodBuilder
     *
     * @param {module:reflection-contracts.ClassMeta} parent
     * @param {Function} target
     */
    constructor(parent, target) {
        super(target);

        this.metaParent = parent;
    }

    /**
     * @override
     *
     * Builds meta reflection
     *
     * @return {MethodMeta}
     */
    build() {
        // Function meta ensures to set the param's parent and freeze them.
        const meta = new MethodMeta(this.metaParent, this.target, this.params);
        meta.freeze();

        return meta;
    }
}
