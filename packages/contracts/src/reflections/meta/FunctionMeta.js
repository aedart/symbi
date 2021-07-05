import { Meta } from './Meta';

/**
 * Function Meta
 *
 * Provides meta information about a function
 *
 * @interface
 * @extends module:reflection-contracts.Meta
 * @memberOf module:reflection-contracts
 */
export default class FunctionMeta extends Meta {
    /**
     * Name of the function
     *
     * @public
     *
     * @return {string|null}
     */
    get name() {}

    /**
     * Function parameters
     *
     * @public
     *
     * @return {module:reflection-contracts.ParameterMeta[]}
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
     * Creates a new meta function instance with given
     * list of meta parameters
     *
     * @param {module:reflection-contracts.ParameterMeta[]} [parameters]
     *
     * @return {FunctionMeta} New instance
     */
    withParameters(parameters = []) {}
}
