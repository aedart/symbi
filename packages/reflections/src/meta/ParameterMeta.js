import { ParameterMeta as Contract } from '@aedart/contracts';
import mix from '@aedart/mixins';
import MetaTarget from '../concerns/MetaTarget';

/**
 * Function Parameter Meta
 *
 * @implements Contract
 */
export default class ParameterMeta extends mix(MetaTarget)
    .inherit(Contract)
    .make() {
    /**
     * Function meta that this parameter meta belongs to
     *
     * @protected
     *
     * @type {FunctionMeta}
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
     * @type {*|undefined}
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
     * @param {FunctionMeta} meta The function meta this parameter meta belongs to
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
     * The function meta that this parameter meta belongs to
     *
     * @public
     *
     * @return {FunctionMeta}
     */
    get parent() {
        return this.metaParent;
    }

    /**
     * Name of the parameter
     *
     * @public
     *
     * @return {string|null}
     */
    get name() {
        return this.paramName;
    }

    /**
     * Datatype(s) of parameter
     *
     * @public
     *
     * @return {*[]}
     */
    get types() {
        return this.paramTypes;
    }

    /**
     * Default value for parameter
     *
     * @public
     *
     * @return {*}
     */
    get defaultValue() {
        return this.paramDefaultValue;
    }

    /**
     * Determine if one or more types has been specified for parameter
     *
     * @public
     *
     * @return {boolean}
     */
    hasTypes() {
        return this.types.length > 0;
    }

    /**
     * Determine if parameter is required
     *
     * @public
     *
     * @return {boolean}
     */
    isRequired() {
        return !this.isOptional();
    }

    /**
     * Determine if parameter is optional
     *
     * @public
     *
     * @return {boolean}
     */
    isOptional() {
        return this.hasDefaultValue();
    }

    /**
     * Determine if a default value has been set for parameter
     *
     * @public
     *
     * @return {boolean}
     */
    hasDefaultValue() {
        return this.defaultValue !== undefined;
    }
}
