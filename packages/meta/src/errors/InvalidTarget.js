import MetaError from './MetaError';

/**
 * Invalid Target Error
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 */
export default class InvalidTarget extends MetaError
{
    /**
     * Create new instance
     *
     * @param {...} args
     */
    constructor(...args)
    {
        // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
        super(...args);

        if(Error.captureStackTrace){
            Error.captureStackTrace(this, InvalidTarget);
        }

        this.name = this.constructor.name;
    }
}