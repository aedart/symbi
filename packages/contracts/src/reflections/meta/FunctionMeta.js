import { Meta } from './Meta';

/**
 * Function Meta
 *
 * Provides meta information about a function
 *
 * @interface
 * @extends Meta
 */
export default class FunctionMeta extends Meta {
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
     * @return {ParameterMeta[]}
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
