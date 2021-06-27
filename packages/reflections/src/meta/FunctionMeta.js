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
     * @type {module:reflection-contracts.ParameterMeta[]}
     */
    metaParameters;

    /**
     * FunctionMeta
     *
     * @param {Function} target
     * @param {module:reflection-contracts.ParameterMeta[]} parameters
     */
    constructor(target, parameters = []) {
        super();

        this.defineMetaTarget(target);
        this.metaParameters = parameters;
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
        return this.metaParameters;
    }

    /**
     * @inheritdoc
     */
    hasParameters() {
        return this.parameters.length > 0;
    }
}
