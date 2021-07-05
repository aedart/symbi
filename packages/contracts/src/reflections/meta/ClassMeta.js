import { Meta } from './Meta';

/**
 * Class Meta
 *
 * Provides meta information about a class
 *
 * @interface
 * @extends module:reflection-contracts.Meta
 * @memberOf module:reflection-contracts
 */
export default class ClassMeta extends Meta {
    /**
     * Name of the class
     *
     * @public
     *
     * @return {string|null}
     */
    get name() {}

    /**
     * Class methods
     *
     * @public
     *
     * @return {module:reflection-contracts.MethodMeta[]}
     */
    get methods() {}

    /**
     * Determine if class has methods
     *
     * @public
     *
     * @return {boolean}
     */
    hasMethods() {}

    /**
     * Creates a new meta class instance with given
     * list of meta methods
     *
     * @param {module:reflection-contracts.MethodMeta[]} [methods]
     *
     * @return {ClassMeta} New instance
     */
    withMethods(methods = []) {}

    /**
     * Class constructor method
     *
     * @public
     *
     * @return {module:reflection-contracts.MethodMeta|null}
     */
    get constructorMethod() {}

    /**
     * Determine if class has constructor method declared
     *
     * @public
     *
     * @return {boolean}
     */
    hasConstructor() {}
}
