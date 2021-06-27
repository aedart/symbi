import { FunctionMetaBuilder as Contract } from '@aedart/contracts/dist/reflections.esm';
import FunctionMeta from '../meta/FunctionMeta';
import ParameterMeta from '../meta/ParameterMeta';
import mix from '@aedart/mixins';

/**
 * Function Meta Builder
 *
 * @implements module:reflection-contracts.FunctionBuilder
 */
export default class FunctionBuilder extends mix()
    .inherit(Contract)
    .make() {
    /**
     * Target
     *
     * @protected
     *
     * @type {Function}
     */
    target;

    /**
     * List of meta parameters
     *
     * @protected
     *
     * @type {ParameterMeta[]}
     */
    params = [];

    /**
     * FunctionBuilder
     *
     * @param {Function} target
     */
    constructor(target) {
        super();

        this.target = target;
    }

    /**
     * @inheritDoc
     */
    param(types, defaultValue = undefined, name = null) {
        if (!Array.isArray(types)) {
            types = [types];
        }

        // Create new meta, but do not freeze it yet. This SHOULD be done automatically
        // by the function meta (implementation specific).
        const meta = new ParameterMeta(null, types, defaultValue, name);

        this.params.push(meta);

        return this;
    }

    /**
     * Builds meta reflection
     *
     * @return {FunctionMeta}
     */
    build() {
        // Function meta ensures to set the param's parent and freeze them.
        const meta = new FunctionMeta(this.target, this.params);
        meta.freeze();

        return meta;
    }
}
