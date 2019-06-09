'use strict';

import {
    Data,
    InvalidTarget
} from '@aedart/meta';

describe('Meta Data', function(){

    it("can create new instance", function(){
        let target = {};
        let data = {
            a: true,
            b: false
        };

        let metaData = new Data(target, data);

        expect(metaData).toBeTruthy();
        expect(metaData.target).toBe(target);
        expect(metaData.data).toBe(data);
    });

    it("can create new instance with function as target", function(){
        let target = function(){};
        let data = {
            a: true,
            b: false
        };

        let metaData = new Data(target, data);

        expect(metaData).toBeTruthy();
        expect(metaData.target).toBe(target);
        expect(metaData.data).toBe(data);
    });

    it("fails if target is not a function or object", function(){
        let target = 'my-invalid-target';
        let data = false;

        let f = () => {
            return new Data(target, data);
        };

        // expect(f).toThrowError(InvalidTarget); // TODO: Still does not work with Babel 7!?
        expect(f).toThrowError();
    });
});