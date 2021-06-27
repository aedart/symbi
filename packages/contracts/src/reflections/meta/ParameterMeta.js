import { Meta } from './Meta';

/**
 * Function Parameter Meta
 *
 * Provides meta information about a function's parameter
 *
 * @interface
 * @extends Meta
 * @memberOf module:contracts
 */
export default class ParameterMeta extends Meta {
    /**
     * The function meta that this parameter meta belongs to
     *
     * @public
     *
     * @return {FunctionMeta}
     */
    get parent() {}

    /**
     * Name of the parameter
     *
     * @public
     *
     * @return {string|null}
     */
    get name() {}

    /**
     * Datatype(s) of parameter
     *
     * @public
     *
     * @return {*[]}
     */
    get types() {}

    /**
     * Default value for parameter
     *
     * @public
     *
     * @return {*}
     */
    get defaultValue() {}

    /**
     * Determine if one or more types has been specified for parameter
     *
     * @public
     *
     * @return {boolean}
     */
    hasTypes() {}

    /**
     * Determine if parameter is required
     *
     * @public
     *
     * @return {boolean}
     */
    isRequired() {}

    /**
     * Determine if parameter is optional
     *
     * @public
     *
     * @return {boolean}
     */
    isOptional() {}

    /**
     * Determine if a default value has been set for parameter
     *
     * @public
     *
     * @return {boolean}
     */
    hasDefaultValue() {}
}
