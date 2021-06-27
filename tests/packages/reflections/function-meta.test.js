import {MetaReflection} from "@aedart/reflections";
import { FunctionMeta } from "@aedart/contracts/dist/reflections.esm";

describe('Meta Reflections', () => {

    describe('Function Meta', () => {

        it('can define meta for function', function () {

            let myFunction = () => {};

            MetaReflection.defineFunction(myFunction, (target, builder) => {
                // N/A - not needed for this test
            });

            // -------------------------------------------------------------------- //

            expect(MetaReflection.has(myFunction)).toBeTrue('No meta detected for function');

            const meta = MetaReflection.ofFunction(myFunction);
            expect(meta).toBeInstanceOf(FunctionMeta);

            expect(meta.target).toBe(myFunction, 'Incorrect meta function target');
            expect(meta.name).toBe(myFunction.name, 'Incorrect meta function name');
        });

        it('should contain correct meta parameters', function () {
            let otherFunction = (a, b, c) => {};

            MetaReflection.defineFunction(otherFunction, (target, builder) => {
                return builder
                    .param(String, undefined, 'a')
                    .param(String, undefined, 'b')
                    .param(String, undefined, 'c')
            });

            // -------------------------------------------------------------------- //

            const meta = MetaReflection.ofFunction(otherFunction);

            // TODO: Sometimes the tests fail - stating that no params are available... but why?!

            expect(meta.hasParameters()).toBeTrue('No meta parameters available');
            expect(meta.parameters.length).toBe(3, 'Incorrect amount of meta parameters');

            meta.parameters.forEach((metaParam) => {
                //expect(metaParam.parent).toBe(meta, 'Incorrect meta parameter parent (meta function)');
                expect(metaParam.name).toBeTruthy('No name defined for meta parameter');

                expect(metaParam.types.length).toBe(1, 'Incorrect amount of parameter types');
                expect(metaParam.types[0]).toBe(String, 'Incorrect parameter type');
            });
        });

    });

});
