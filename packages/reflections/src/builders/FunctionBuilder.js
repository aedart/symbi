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
    #target;

    /**
     * List of meta parameters
     *
     * @protected
     *
     * @type {ParameterMeta[]}
     */
    #params = [];

    /**
     * FunctionBuilder
     *
     * @param {Function} target
     */
    constructor(target) {
        super();

        this.#target = target;
    }

    /**
     * @inheritDoc
     */
    param(types, defaultValue = undefined, name = null) {
        this.#params.push(
            new ParameterMeta(null, types, defaultValue, name)
        );

        return this;
    }

    /**
     * Builds meta reflection
     *
     * @return {FunctionMeta}
     */
    build() {
        return new FunctionMeta(this.#target, this.#params);
    }
}
