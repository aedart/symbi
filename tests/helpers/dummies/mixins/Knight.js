'use strict';

import mix from "@aedart/mixins";
import Player from "./Player";
import HasArmor from "./concerns/HasArmor";

/**
 * Knight
 *
 * FOR TESTING ONLY
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 */
export default class Knight extends mix(Player).with(
    HasArmor
) {

    /**
     * Create Knight instance
     *
     * @param {string} name
     */
    constructor(name) {
        super(name);
    }
}
