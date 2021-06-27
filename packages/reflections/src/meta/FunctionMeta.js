import { FunctionMeta as Contract } from '@aedart/contracts/dist/reflections.esm';
import mix from '@aedart/mixins';
import MetaTarget from '../concerns/MetaTarget';

/**
 * Function Meta
 *
 * @implements module:reflection-contracts.FunctionMeta
 */
export default class FunctionMeta extends mix()
    .with(MetaTarget)
    .inherit(Contract)
    .make() {
    /**
     * Meta parameters
     *
     * @protected
     *
     * @type {ParameterMeta[]}
     */
    metaParameters;

    /**
     * FunctionMeta
     *
     * @param {Function} target
     * @param {ParameterMeta[]} parameters
     */
    constructor(target, parameters = []) {
        super();

        this.defineMetaTarget(target);
        this.metaParameters = parameters;
    }

    /**
     * Name of the function
     *
     * @public
     *
     * @return {string|null}
     */
    get name() {
        const target = this.target;

        if (target !== null && target.hasOwnProperty('name')) {
            return target.name;
        }

        return null;
    }

    /**
     * Function parameters
     *
     * @public
     *
     * @return {ParameterMeta[]}
     */
    get parameters() {
        return this.metaParameters;
    }

    /**
     * Determine if function has parameters
     *
     * @public
     *
     * @return {boolean}
     */
    hasParameters() {
        return this.parameters.length > 0;
    }
}
