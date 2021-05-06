'use strict';

/**
 * Reference to inherited classes
 *
 * @type {symbol}
 */
export const INHERITS_FROM = Symbol('inherits-from');

/**
 * Mixin Builder
 *
 * Adaptation of Justin Fagnani's Mixwith.js and Eric Faust's mixin utilities, along
 * with Karey Higuera's multi-class inheritance.
 *
 * @see http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/
 * @see https://github.com/justinfagnani/mixwith.js
 * @see https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/
 * @see https://github.com/kbravh/multi-class
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 */
export default class Builder {
    /**
     * The base-class to extend
     *
     * @protected
     *
     * @type {Function}
     */
    baseClass;

    /**
     * List of reserved properties names that should not
     * be copied when multiple classes are merged into
     * the base class.
     *
     * @protected
     *
     * @type {string[]}
     */
    static reservedProperties = [
        'constructor',
        'prototype',
        'name'
    ];

    /**
     * Create new Mixin Builder instance
     *
     * @param {Function} [baseClass] Defaults to empty class when
     *                                no base class is given
     * @param {...Function} [inheritFrom] Classes to inherit from
     */
    constructor(baseClass, ...inheritFrom) {
        this.baseClass = baseClass || class {};

        if (inheritFrom.length > 0) {
            this.inherit(...inheritFrom);
        }
    }

    /**
     * Inherit from given classes
     *
     * @param {...Function} from
     *
     * @return {Builder}
     */
    inherit(...from) {
        // Create a list of classes, including the current base class.
        const classes = [...from.reverse(), this.baseClass];

        // Obtain reference to the copy properties method.
        const copyProperties = this.copyProperties;

        // Create a "Frame" class, which is able to invoke all constructors.
        // Heavily inspired by Karey Higuera's multi-class.
        const frame = class {
            constructor(...args) {
                // Ensure that all constructors are invoked. This needs to be
                // done so that properties that are only defined inside constructor
                // methods are initialised correctly.
                for (const classFn of classes) {
                    // Create new instance of the inherited class, pass on evt.
                    // arguments to it's constructor.
                    const created = new classFn.prototype.constructor(...args);

                    // Assign the created instance to this frame's prototype,...
                    Object.assign(
                        this.constructor.prototype,
                        created
                    );

                    // Copy properties that might have been defined in the constructor!
                    copyProperties(this, created);
                }

                // Save reference to the classes that this frame class inherits from.
                this[INHERITS_FROM] = new Set(classes);
            }
        };

        for (const classFn of classes) {
            // Ensure to copy eventual class properties, methods,...etc into the frame class
            copyProperties(frame, classFn);
            copyProperties(frame.prototype, classFn.prototype);

            // (Re)define the class' Symbol.hasInstance method, so that we can perform
            // correct "instanceof" checks.
            const originalHasInstance = classFn[Symbol.hasInstance];
            Object.defineProperty(classFn, Symbol.hasInstance, {
                value: function (instance) {
                    // Check if instance has "inherited from" symbol defined and
                    // whether it matches the class exactly...
                    if (instance[INHERITS_FROM] &&
                        instance[INHERITS_FROM].has(classFn) &&
                        classFn === this
                    ) {
                        return true;
                    }

                    // Default to the original implementation.
                    return originalHasInstance(instance);
                }
            });
        }

        // Overwrite the current base class with the new derived "Frame" class.
        this.baseClass = frame;

        return this;
    }

    /**
     * Mix the base class with one or more mixins (decorators)
     *
     * @public
     *
     * @param {...Function} mixins
     *
     * @return {Function} Base class with applied mixins
     */
    with(...mixins) {
        return mixins.reduce((constructorFn, mixin) => {
            return (typeof mixin !== 'function')
                ? constructorFn
                : mixin(constructorFn);
        }, this.baseClass);
    }

    /**
     * Create and return the mixed base class
     *
     * @return {Function}
     */
    make() {
        return this.baseClass;
    }

    /*****************************************************************
     * Internals
     ****************************************************************/

    /**
     * Copies properties from the source into given
     * target
     *
     * @protected
     *
     * @param {Function|object} target
     * @param {Function|object} source
     */
    copyProperties(target, source) {
        for (const key of Reflect.ownKeys(source)) {
            // Skip if key is reserved...
            if (typeof source === 'function' && Builder.reservedProperties.indexOf(key) !== -1) {
                continue;
            }

            // Define (copy) property onto target
            const desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    }
}
