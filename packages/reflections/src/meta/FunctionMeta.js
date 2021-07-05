import { FunctionMeta as Contract } from '@aedart/contracts/dist/reflections.esm';
import mix from '@aedart/mixins';
import MetaTarget from '../concerns/MetaTarget';

/**
 * Function Meta
 *
 * @implements module:reflection-contracts.FunctionMeta
 * @implements module:support-contracts.Freezable
 */
export default class FunctionMeta extends mix()
    .inherit(Contract)
    .with(MetaTarget) {
    /**
     * Meta parameters
     *
     * @protected
     *
     * @type {module:reflection-contracts.ParameterMeta[]}
     */
    #metaParameters;

    /**
     * FunctionMeta
     *
     * @param {Function} target
     * @param {module:reflection-contracts.ParameterMeta[]} parameters
     */
    constructor(target, parameters = []) {
        super();

        this.defineMetaTarget(target);
        this.#metaParameters = this.resolveParameters(parameters);
    }

    /**
     * @inheritdoc
     */
    get name() {
        const target = this.target;

        if (target !== null && target.hasOwnProperty('name')) {
            return target.name;
        }

        return null;
    }

    /**
     * @inheritdoc
     */
    get parameters() {
        return this.#metaParameters;
    }

    /**
     * @inheritdoc
     */
    hasParameters() {
        return this.parameters.length > 0;
    }

    /**
     * @inheritdoc
     */
    withParameters(parameters = []) {
        return new this(
            this.target,
            parameters
        );
    }

    /*****************************************************************
     * Internals
     ****************************************************************/

    /**
     * Resolves the meta parameters
     *
     * @protected
     *
     * @param {module:reflection-contracts.ParameterMeta[]} parameters
     *
     * @return {module:reflection-contracts.ParameterMeta[]}
     */
    resolveParameters(parameters) {
        return parameters.map((param) => {
            if (param.hasOwnProperty('withParent') && typeof param.withParent === 'function') {
                return param.withParent(this);
            }

            return param;
        });
    }
}
