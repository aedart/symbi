/**
 * Meta Store
 *
 * Stores reference callbacks for target classes, methods or functions
 * that build meta
 */
export default class Store {
    /**
     * Map of targets and callbacks that build
     * meta
     *
     * @type {WeakMap<object|function, function|*>}
     */
    #map;

    /**
     * Store
     */
    constructor() {
        this.#map = new WeakMap();
    }

    /**
     * Set meta callback for given target
     *
     * @param {object|function} target
     * @param {Function|*|undefined} callback
     *
     * @return {Store}
     */
    set(target, callback) {
        this.#map.set(target, callback);

        return this;
    }

    /**
     * Returns the meta callback for given target
     *
     * @param {object|function} target
     *
     * @return {Function|*|undefined}
     */
    get(target) {
        return this.#map.get(target);
    }

    /**
     * Determine if meta callback has been defined
     * for given target
     *
     * @param {object|function} target
     *
     * @return {boolean}
     */
    has(target) {
        return this.#map.has(target);
    }
}
