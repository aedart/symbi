import mix from '@aedart/mixins';
import DecoratedA from './mixins/DecoratedA';
import DecoratedB from './mixins/DecoratedB';

/**
 * Component B with decorated mixins
 */
export default class ComponentB extends mix().with(
    DecoratedA,
    DecoratedB
){

}