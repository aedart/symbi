# Inheritance

You can also easily inherit from another class and still mixin one or more classes.
The `mix()` method accepts a single argument, which is the "superclass" that your component should inherit from. 

```js
import mix from '@aedart/mixins';
import Person from './Person';
import HitPoints from './HitPoints';

export default class Hero extends mix(Person).with(
    HitPoints
){
    // ... not shown
}
```