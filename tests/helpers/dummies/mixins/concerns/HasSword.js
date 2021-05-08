"use strict";

import { declare } from "@aedart/mixins";

/**
 * Has Sword Mixin
 *
 * @mixin
 *
 * @return {Function}
 */
export default declare((superClass) => class HasSword extends superClass {

    damage = 8;

});
