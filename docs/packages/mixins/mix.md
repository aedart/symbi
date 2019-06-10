# Use Mixin

To use a single mixin, import the `mix()` method (_default import_) and state the mixin class in the `with()` method.

```js
import mix from '@aedart/mixins';
import DescriptionAware from './DescriptionAware';

export default class Person extends mix().with(
    DescriptionAware
){
    // ... not shown
}
```

Elsewhere in your application, you can simply import your class and use it.

```js
import Person from './Person';

let player = new Person();
player.description = 'A basketball player';
```

## Use Multiple Mixins

The `with()` method accepts an array of classes, so you can simply state all the mixins that you require.

```js
import mix from '@aedart/mixins';
import DescriptionAware from './DescriptionAware';
import NameAware from './NameAware';

export default class Person extends mix().with(
    NameAware,
    DescriptionAware
){
    // ... not shown
}
```