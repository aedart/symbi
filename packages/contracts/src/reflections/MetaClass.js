import Meta from "./Meta";

/**
 * Meta Class
 *
 * Contains meta information about a class
 *
 * @interface
 */
export default class MetaClass extends Meta {
    /**
     * Name of the class
     *
     * @public
     *
     * @return {string}
     */
    get name() {}

    /**
     * Class methods
     *
     * @public
     *
     * @return {MetaMethod[]}
     */
    get methods() {}

    /**
     * Class constructor method
     *
     * @public
     *
     * @return {MetaMethod|undefined}
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
     * Returns amount of class methods
     *
     * @public
     *
     * @return {number}
     */
    methodsCount() {}

    /**
     * Determine if class has constructor method declared
     *
     * @public
     *
     * @return {boolean}
     */
    hasConstructorMethod() {}
}
