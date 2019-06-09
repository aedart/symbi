import Data from './meta/Data';
import ClassData from './meta/ClassData';
import MethodData from './meta/MethodData';
import InvalidTarget from './errors/InvalidTarget';
import InvalidData from './errors/InvalidData';
import MetaError from './errors/MetaError';

/**
 * Meta Map reference
 *
 * @type {symbol}
 * @private
 */
const _map = Symbol('meta-map');

/**
 * Meta Container
 *
 * Stores arbitrary data about a given class or method
 */
class Meta
{
    /**
     * @constructor
     */
    constructor(){
        this[_map] = new WeakMap();
    }

    /**
     * Set meta data for target
     *
     * Method will overwrite any existing meta data for target
     *
     * @param {Function|Object} target
     * @param {Data} data
     *
     * @returns {Meta}
     *
     * @throws {MetaError} If target or data is invalid
     */
    set(target, data){
        // Fail if invalid target
        let type = typeof target;
        if( ! (type === 'function' || type === 'object')){
            throw new InvalidTarget('Target must be a Function or Object');
        }

        // Fail if invalid data
        if(! (data instanceof Data)){
            throw new InvalidData('Given data MUST be instance of meta "Data"');
        }

        this[_map].set(target, data);

        return this;
    }

    /**
     * Add meta data for target
     *
     * Fails if there already exists meta data for target
     *
     * @param {Function|Object} target
     * @param {Data} data
     *
     * @returns {Meta}
     *
     * @throws {MetaError} If target or given data is invalid OR if meta data has already been added for target
     */
    add(target, data){
        this._assertTargetDoesNotExist(target);

        return this.set(target, data);
    }

    /**
     * Set meta class data for target
     *
     * By using this method, you "label" (associate) the target to be
     * a class.
     *
     * Method will overwrite any existing meta data for target
     *
     * @param {Function|Object} target
     * @param {ClassData|Object} [data]
     *
     * @returns {ClassData}
     *
     * @throws {MetaError} If target or given data is invalid
     */
    setClass(target, data = {}){
        let classData = data;
        if(! (data instanceof ClassData)){
            classData = new ClassData(target, data);
        }

        this.set(target, classData);

        return classData;
    }

    /**
     * Add meta class data for target
     *
     * By using this method, you "label" (associate) the target to be
     * a class.
     *
     * Fails if there already exists meta data for target
     *
     * @param {Function|Object} target
     * @param {ClassData|Object} [data]
     *
     * @returns {ClassData}
     *
     * @throws {MetaError} If target or given data is invalid OR if meta data has already been added for target
     */
    addClass(target, data = {}){
        this._assertTargetDoesNotExist(target);

        return this.setClass(target, data);
    }

    /**
     * Check if target has been "labelled" (associated) with
     * meta class data.
     *
     * @see Meta.setClass()
     * @see Meta.addClass()
     *
     * @param {Function|Object} target
     *
     * @returns {boolean}
     */
    hasClass(target){
        if( ! this.has(target)){
            return false;
        }

        let meta = this.get(target);

        return meta instanceof ClassData;
    }

    /**
     * Set meta method data for target
     *
     * By using this method, you "label" (associate) the target to be
     * a method.
     *
     * Method will overwrite any existing meta data for target
     *
     * @param {Function|Object} target
     * @param {MethodData|Object} [data]
     *
     * @returns {MethodData}
     *
     * @throws {MetaError} If target or given data is invalid
     */
    setMethod(target, data = {}){
        let methodData = data;
        if(! (data instanceof MethodData)){
            methodData = new MethodData(target, data);
        }

        this.set(target, methodData);

        return methodData;
    }

    /**
     * Add meta method data for target
     *
     * By using this method, you "label" (associate) the target to be
     * a method.
     *
     * Fails if there already exists meta data for target
     *
     * @param {Function|Object} target
     * @param {MethodData|Object} [data]
     *
     * @returns {MethodData}
     *
     * @throws {MetaError} If target or given data is invalid OR if meta data has already been added for target
     */
    addMethod(target, data = {}){
        this._assertTargetDoesNotExist(target);

        return this.setMethod(target, data);
    }

    /**
     * Check if target has been "labelled" (associated) with
     * meta method data.
     *
     * @see Meta.setMethod()
     * @see Meta.addMethod()
     *
     * @param {Function|Object} target
     *
     * @returns {boolean}
     */
    hasMethod(target){
        if( ! this.has(target)){
            return false;
        }

        let meta = this.get(target);

        return meta instanceof MethodData;
    }

    /**
     * Returns meta data for the given target
     *
     * @param {Function|Object} target
     *
     * @returns {Data|undefined}
     */
    get(target){
        return this[_map].get(target);
    }

    /**
     * Check if target has meta data
     *
     * @param {Function|Object} target
     *
     * @returns {boolean}
     */
    has(target){
        return this[_map].has(target);
    }

    /**
     * Delete target meta data
     *
     * @param {Function|Object} target
     *
     * @returns {boolean}
     */
    delete(target){
        return this[_map].delete(target);
    }

    /**
     * Alias for delete
     *
     * @see Meta.delete()
     *
     * @param {Function|Object} target
     *
     * @returns {boolean}
     */
    forget(target){
        return this.delete(target);
    }

    /**
     * Assert that given target does not already
     * exist in Meta
     *
     * @param {Function|Object} target
     *
     * @private
     *
     * @throws {MetaError}
     */
    _assertTargetDoesNotExist(target){
        if(this.has(target)){
            throw new MetaError('Target already has meta defined');
        }
    }
}

// Singleton instance
const instance = new Meta();
Object.freeze(instance);

export default instance;