import { Meta } from './Meta';

/**
 * Function Parameter Meta
 *
 * Provides meta information about a function's parameter
 *
 * @interface
 * @extends module:reflection-contracts.Meta
 * @memberOf module:reflection-contracts
 */
export default class ParameterMeta extends Meta {
    /**
     * The function meta that this parameter meta belongs to
     *
     * @public
     *
     * @return {module:reflection-contracts.FunctionMeta|null}
     */
    get parent() {}

    /**
     * Determine if meta has a parent mata function
     *
     * @return {boolean}
     */
    hasParent() {}

    /**
     * Creates a new meta parameter instance with given
     * meta function as parent
     *
     * @param {module:reflection-contracts.FunctionMeta} meta
     *
     * @return {ParameterMeta} New instance
     */
    withParent(meta) {}

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
