/**
 * Meta Error
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 */
export default class MetaError extends Error
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
            Error.captureStackTrace(this, MetaError);
        }

        this.name = this.constructor.name;
    }
}