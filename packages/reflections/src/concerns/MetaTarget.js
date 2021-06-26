'use strict';

import {declare} from "@aedart/mixins";

/**
 * Concerns Meta Target
 *
 * @mixin
 *
 * @see {Meta}
 *
 * @return {Function}
 */
export default declare((superClass) => class MetaTarget extends superClass {

    /**
     * Meta target
     *
     * @type {Function|null}
     */
    #metaTarget = null;

    /**
     * The target of this meta is for
     *
     * @public
     *
     * @return {Function|null}
     */
    get target() {
        return this.#metaTarget;
    }

    /**
     * Define the meta target
     *
     * @protected
     *
     * @param {Function|null} target
     */
    defineMetaTarget(target) {
        this.#metaTarget = target
    }
});
