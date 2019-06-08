'use strict';

import ComponentB from './../../helpers/mixins/ComponentB';
import ExtComponentB from './../../helpers/mixins/ExtComponentB';
import DecoratedA from './../../helpers/mixins/mixins/DecoratedA';
import DecoratedB from './../../helpers/mixins/mixins/DecoratedB';
import faker from 'faker';

describe('Mixin Decorators Test', function(){

    it('should create instance with decorated mixins', function () {
        let box = new ComponentB();

        let width = faker.random.number;
        let height = faker.random.number;

        box.width = width;
        box.height = height;

        expect(box.width).toBe(width, 'Incorrect width');
        expect(box.height).toBe(height, 'Incorrect height');
    });

    it('should create instance, inherits from class with decorated mixins', function () {
        let box = new ExtComponentB();

        let width = faker.random.number;
        let height = faker.random.number;

        box.width = width;
        box.height = height;

        expect(box.width).toBe(width, 'Incorrect width');
        expect(box.height).toBe(height, 'Incorrect height');
    });

    it('should inherit from decorated mixins', function () {
        let box = new ComponentB();

        expect(box instanceof DecoratedA).toBe(true, 'incorrect inheritance for decorated mixin A');
        expect(box instanceof DecoratedB).toBe(true, 'incorrect inheritance for decorated mixin B');
    });

    it('extended class should inherit from decorated mixins', function () {
        let box = new ExtComponentB();

        expect(box instanceof DecoratedA).toBe(true, 'incorrect inheritance for decorated mixin A');
        expect(box instanceof DecoratedB).toBe(true, 'incorrect inheritance for decorated mixin B');
    });
});