import { MetaReflection as Contract, META_REFLECTION_SYMBOL } from '@aedart/contracts/dist/reflections.esm';
import mix from '@aedart/mixins';

/**
 * Meta Reflection
 *
 * @implements module:reflection-contracts.MetaReflection
 */
export default class MetaReflection extends mix()
    .inherit(Contract)
    .make() {
    /**
     * @inheritdoc
     */
    static ofClass(target) {

    }

    /**
     * @inheritdoc
     */
    static ofMethod(target) {

    }

    /**
     * @inheritdoc
     */
    static ofFunction(target) {

    }

    /**
     * @inheritdoc
     */
    static has(target) {

    }

    /**
     * @inheritdoc
     */
    static defineClass(target, callback) {

    }

    /**
     * @inheritdoc
     */
    static defineFunction(target, callback) {

    }

    /**
     * @inheritdoc
     */
    static get symbol() {
        return META_REFLECTION_SYMBOL;
    }
}
