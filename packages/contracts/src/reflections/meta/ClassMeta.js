import { Meta } from './Meta';

/**
 * Class Meta
 *
 * Provides meta information about a class
 *
 * @interface
 * @extends Meta
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
     * Class constructor method
     *
     * @public
     *
     * @return {module:reflection-contracts.MethodMeta|null}
     */
    get constructorMethod() {}

    /**
     * Determine if class has methods
     *
     * @public
     *
     * @return {boolean}
     */
    hasMethods() {}

    /**
     * Determine if class has constructor method declared
     *
     * @public
     *
     * @return {boolean}
     */
    hasConstructor() {}
}
