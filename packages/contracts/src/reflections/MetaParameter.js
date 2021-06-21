import Meta from './Meta';

/**
 * Meta Parameter
 *
 * Contains meta information about a method or function's parameter
 *
 * @interface
 */
export default class MetaParameter extends Meta {
    /**
     * Name of the parameter
     *
     * @public
     *
     * @return {string}
     */
    get name() {}

    /**
     * Datatype of parameter
     *
     * @public
     *
     * @return {*}
     */
    get type() {}

    /**
     * Default value for parameter
     *
     * @public
     *
     * @return {*}
     */
    get defaultValue() {}

    /**
     * The function (or method) that declares the parameter
     *
     * @public
     *
     * @return {MetaFunction}
     */
    get declaringFunction() {}

    /**
     * Determine if a type has been specified for parameter
     *
     * @public
     *
     * @return {boolean}
     */
    hasType() {}

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
