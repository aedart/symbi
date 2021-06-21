import Meta from "./Meta";

/**
 * Meta Function
 *
 * Contains meta information about a function
 *
 * @interface
 */
export default class MetaFunction extends Meta {

    /**
     * Name of the function
     *
     * @public
     *
     * @return {string|undefined}
     */
    get name() {}

    /**
     * Function parameters
     *
     * @public
     *
     * @return {MetaParameter[]}
     */
    get parameters() {}

    /**
     * Determine if function has parameters
     *
     * @public
     *
     * @return {boolean}
     */
    hasParameters() {}

    /**
     * Returns amount of function parameters
     *
     * @public
     *
     * @return {number}
     */
    parametersCount() {}
}
