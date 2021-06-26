/**
 * Meta Reflection method symbol
 *
 * This symbol is used to identify a class method
 * able to define meta reflections.
 *
 * @type {symbol}
 */
export const META_REFLECTION_SYMBOL = Symbol('meta-reflection');

/**
 * Meta Reflection
 *
 * @interface
 */
export default class MetaReflection {
    /**
     * Returns the meta reflection symbol
     *
     * @public
     *
     * @return {META_REFLECTION_SYMBOL}
     */
    static get symbol() {}
}
