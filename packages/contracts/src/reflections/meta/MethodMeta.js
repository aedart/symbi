import FunctionMeta from './FunctionMeta';

/**
 * Class Method Meta
 *
 * Provides meta information about a class method
 *
 * @interface
 * @extends module:reflection-contracts.FunctionMeta
 * @memberOf module:reflection-contracts
 */
export default class MethodMeta extends FunctionMeta {
    /**
     * The class meta that this method meta belongs to
     *
     * @public
     *
     * @return {module:reflection-contracts.ClassMeta}
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
