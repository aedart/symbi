"use strict";

import { declare } from "@aedart/mixins";

/**
 * Has Armor Mixin
 *
 * @mixin
 *
 * @return {Function}
 */
export default declare((superClass) => class HasArmor extends superClass {

    /**
     * Get the armor level
     *
     * @return {number}
     */
    get armor() {
        return 11;
    }
});
