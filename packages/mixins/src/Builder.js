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
        'name',
        Symbol.hasInstance
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

        // Make the "frame" class
        const frame = this.makeFrameClass(classes);

        for (const classFn of classes) {
            // Ensure to copy eventual class properties, methods,...etc into the frame class
            this.copyProperties(frame, classFn);
            this.copyProperties(frame.prototype, classFn.prototype);

            // Define Symbol.hasInstance method, if required (or possible).
            this.defineHasInstanceMethod(classFn);
        }

        // Overwrite the current base class with the new derived "Frame" class.
        this.baseClass = frame;

        return this;
    }

    /**
     * Mix the base class with one or more mixins (decorators)
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
     * Creates a new "frame" class that ensures to invoke the
     * constructors of each given classes
     *
     * This method is heavily inspired by Karey Higuera's multi-class
     * inheritance utility (MIT License).
     *
     * @see https://github.com/kbravh/multi-class
     *
     * @protected
     *
     * @param {Function[]} classes Classes to inherit from
     *
     * @return {{new(...[*]=): {}, prototype: {}}}
     */
    makeFrameClass(classes) {
        // Obtain reference to the copy properties method.
        const copyProperties = this.copyProperties;

        return class {
            /**
             * Constructor
             * @param {...*} [args]
             */
            constructor(...args) {
                // Save reference to the classes that this frame class inherits from.
                // This is used later for defining the Symbol.hasInstance method.
                // @see Builder.defineHasInstanceMethod
                this[INHERITS_FROM] = new Set(classes);

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

                    // Merge references to evt. already inherited classes by the base class.
                    if (created.hasOwnProperty(INHERITS_FROM)) {
                        for (const inherited of created[INHERITS_FROM]) {
                            // Only add to list of inherited, if not already added...
                            if (!this[INHERITS_FROM].has(inherited)) {
                                this[INHERITS_FROM].add(inherited);
                            }
                        }
                    }
                }
            }
        };
    }

    /**
     * Defines Symbol.hasInstance on given class, if it's not already defined
     *
     * @see Builder.makeFrameClass
     *
     * @protected
     *
     * @param {Function} classFn
     */
    defineHasInstanceMethod(classFn) {
        // Skip further processing, if given class already has a Symbol.hasInstance defined.
        // Perhaps class has already been inherited previously it's "has instance" method is
        // set - Or a custom Symbol.hasInstance method has been defined, which we must respect.
        if (classFn.hasOwnProperty(Symbol.hasInstance)) {
            return;
        }

        // Obtain native Symbol.hasInstance method, so that we can delegate to it.
        const originalHasInstance = classFn[Symbol.hasInstance];

        // Define Symbol.hasInstance method, ...
        Object.defineProperty(classFn, Symbol.hasInstance, {
            value: function (instance) {
                // Check if instance has "inherited from" symbol defined and
                // whether it matches the class exactly...
                // NOTE: "this" in this context matches classFn
                if (instance[INHERITS_FROM] && instance[INHERITS_FROM].has(this)) {
                    return true;
                }

                // Default to the original implementation.
                return originalHasInstance(instance);
            }
        });
    }

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
            // Skip if key is reserved and the source is a function.
            if (typeof source === 'function' && Builder.reservedProperties.indexOf(key) !== -1) {
                continue;
            }

            // Skip coping inherited from property - not that this does need a special
            // handling here, or we risk overwriting evt. defined list of inherited.
            // Furthermore, it does not work adding the symbol to list of reserved
            // properties because we could then omit too much from being copied!
            if (key === INHERITS_FROM) {
                continue;
            }

            // Define (copy) property onto target
            const desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    }
}
