import { ParameterMeta as Contract } from '@aedart/contracts/dist/reflections.esm';
import mix from '@aedart/mixins';
import MetaTarget from '../concerns/MetaTarget';

/**
 * Function Parameter Meta
 *
 * @implements module:reflection-contracts.ParameterMeta
 */
export default class ParameterMeta extends mix()
    .with(MetaTarget)
    .inherit(Contract)
    .make() {
    /**
     * Function meta that this parameter meta belongs to
     *
     * @protected
     *
     * @type {module:reflection-contracts.FunctionMeta}
     */
    metaParent;

    /**
     * Parameter's datatype(s)
     *
     * @protected
     *
     * @type {*[]}
     */
    paramTypes = [];

    /**
     * Parameter's default value
     *
     * @protected
     *
     * @type {*}
     */
    paramDefaultValue;

    /**
     * Parameter's name
     *
     * @protected
     *
     * @type {string|null}
     */
    paramName;

    /**
     * ParameterMeta
     *
     * @param {module:reflection-contracts.FunctionMeta} meta The function meta this parameter meta belongs to
     * @param {*[]} types Datatype(s) of parameter
     * @param {*} [defaultValue] Evt. default value of parameter
     * @param {string|null} name Evt. name of parameter
     */
    constructor(
        meta,
        types,
        defaultValue = undefined,
        name = null
    ) {
        super();

        this.metaParent = meta;
        this.paramTypes = types;
        this.paramDefaultValue = defaultValue;
        this.paramName = name;
    }

    /**
     * @inheritDoc
     */
    get parent() {
        return this.metaParent;
    }

    /**
     * @inheritdoc
     */
    get name() {
        return this.paramName;
    }

    /**
     * @inheritdoc
     */
    get types() {
        return this.paramTypes;
    }

    /**
     * @inheritdoc
     */
    get defaultValue() {
        return this.paramDefaultValue;
    }

    /**
     * @inheritdoc
     */
    hasTypes() {
        return this.types.length > 0;
    }

    /**
     * @inheritdoc
     */
    isRequired() {
        return !this.isOptional();
    }

    /**
     * @inheritdoc
     */
    isOptional() {
        return this.hasDefaultValue();
    }

    /**
     * @inheritdoc
     */
    hasDefaultValue() {
        return this.defaultValue !== undefined;
    }
}
