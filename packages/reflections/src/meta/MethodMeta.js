import { MethodMeta as Contract } from '@aedart/contracts/dist/reflections.esm';
import FunctionMeta from './FunctionMeta';
import mix from '@aedart/mixins';

/**
 * Class Method Meta
 *
 * @implements module:reflection-contracts.MethodMeta
 * @extends FunctionMeta
 */
export default class MethodMeta extends mix(FunctionMeta)
    .inherit(Contract)
    .make() {
    /**
     * Class meta that this method meta belongs to
     *
     * @protected
     *
     * @type {module:reflection-contracts.ClassMeta}
     */
    #metaParent;

    /**
     * State whether meta is for a class constructor method
     * or not
     *
     * @type {boolean|undefined}
     */
    #definedMetaForConstructor;

    /**
     * MethodMeta
     *
     * @param {Function} target
     * @param {module:reflection-contracts.ParameterMeta[]} parameters
     * @param {module:reflection-contracts.ClassMeta|null} [meta] The class meta that this method meta belongs to
     */
    constructor(
        target,
        parameters = [],
        meta = null
    ) {
        super(target, parameters);

        if (meta !== null) {
            this.withParent(meta);
        }
    }

    /**
     * @inheritdoc
     */
    get parent() {
        return this.#metaParent;
    }

    /**
     * @inheritdoc
     */
    hasParent() {
        return this.#metaParent !== null;
    }

    /**
     * @inheritdoc
     */
    withParent(meta) {
        return new this(
            this.target,
            this.parameters,
            meta
        );
    }

    /**
     * @inheritdoc
     */
    withParameters(parameters = []) {
        return new this(
            this.target,
            parameters,
            this.parent
        );
    }

    /**
     * @inheritdoc
     */
    isConstructor() {
        if (this.#definedMetaForConstructor !== undefined) {
            return this.#definedMetaForConstructor;
        }

        const target = this.parent.target;
        if (!target) {
            return false;
        }

        const proto = Reflect.getPrototypeOf(target);
        if (!proto) {
            return false;
        }

        this.#definedMetaForConstructor = Reflect.has(proto, 'constructor') && proto.constructor === this.target;

        return this.#definedMetaForConstructor;
    }
}
