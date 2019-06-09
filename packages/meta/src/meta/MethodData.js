import mix from '@aedart/mixins';
import Data from './Data';
import DependenciesAware from './../mixins/DependenciesAware';
import InvalidTarget from './../errors/InvalidTarget';

/**
 * Meta Method Data
 *
 * Stores arbitrary data about a given target method
 * 
 * @author Alin Eugen Deac <aedart@gmail.com>
 */
export default class MethodData extends mix(Data).with(
    DependenciesAware
){
    /**
     * Create new instance
     *
     * @param {Function|Object} target
     * @param {object} [data = {}]
     *
     * @throws {InvalidTarget} If target is invalid
     */
    constructor(target, data = {})
    {
        super(target, data);
    }
}