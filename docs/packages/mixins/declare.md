# Declare Mixin

Start by importing the `declare()` method from this package.
Then, you can define a new mixin class in the following way:

```js
import { declare } from '@aedart/mixins';

export default declare((superClass) => class DescriptionAware extends superClass {
    
    set description(desc)
    {
        // ...not shown ...
    }
    
    get description()
    {
        // ... not shown ...
    }
});
```