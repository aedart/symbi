import mix from '@aedart/mixins';
import RegularA from './mixins/RegularA';
import RegularB from './mixins/RegularB';

/**
 * Regular Component with regular mixins
 */
export default class ComponentA extends mix().with(
    RegularA,
    RegularB
){

}