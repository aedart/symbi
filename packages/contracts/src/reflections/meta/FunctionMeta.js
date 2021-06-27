import { Meta } from './Meta';

/**
 * Function Meta
 *
 * Provides meta information about a function
 *
 * @interface
 * @extends Meta
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
}
