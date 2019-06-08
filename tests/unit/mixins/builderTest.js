'use strict';

import ComponentA from './../../helpers/mixins/ComponentA';
import ExtComponentA from './../../helpers/mixins/ExtComponentA';
import faker from 'faker';

describe('Mixin Builder Test', function(){

    it('should create instance with regular mixins', function () {
        let box = new ComponentA();

        let width = faker.random.number;
        let height = faker.random.number;

        box.width = width;
        box.height = height;

        expect(box.width).toBe(width, 'Incorrect width');
        expect(box.height).toBe(height, 'Incorrect height');
    });

    it('should create instance that inherits from class with mixins', function () {
        let box = new ExtComponentA();

        let width = faker.random.number;
        let height = faker.random.number;

        box.width = width;
        box.height = height;

        expect(box.width).toBe(width, 'Incorrect width');
        expect(box.height).toBe(height, 'Incorrect height');
    });
});