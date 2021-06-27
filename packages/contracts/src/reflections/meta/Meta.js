/**
 * Meta
 *
 * Classes that inherit from the "base" are able to provide
 * some kind of meta information about a target.
 *
 * @interface
 * @memberOf module:reflection-contracts
 */
export class Meta {
    /**
     * The target of this meta is for
     *
     * @public
     *
     * @return {Function|null}
     */
    get target() {}
}
