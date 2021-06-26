import FunctionMeta from './FunctionMeta';

/**
 * Class Method Meta
 *
 * Provides meta information about a class method
 *
 * @interface
 * @extends FunctionMeta
 */
export default class MethodMeta extends FunctionMeta {
    /**
     * The class meta that this method meta belongs to
     *
     * @public
     *
     * @return {ClassMeta}
     */
    get parent() {}

    /**
     * Determine if method is class constructor
     *
     * @public
     *
     * @return {boolean}
     */
    isConstructor() {}
}
