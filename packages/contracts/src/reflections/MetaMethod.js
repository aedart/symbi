import MetaFunction from "./MetaFunction";

/**
 * Meta Method
 *
 * Contains meta information about a class method
 *
 * @see MetaFunction
 *
 * @interface
 */
export default class MetaMethod extends MetaFunction {

    /**
     * The class that declares the parameter
     *
     * @public
     *
     * @return {MetaClass}
     */
    get declaringClass() {}

    /**
     * Determine if method is class constructor
     *
     * @public
     *
     * @return {boolean}
     */
    isConstructor() {}
}
