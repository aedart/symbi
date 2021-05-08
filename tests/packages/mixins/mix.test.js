import Knight from "../../helpers/dummies/mixins/Knight";
import faker from 'faker';
import Player from "../../helpers/dummies/mixins/Player";
import HasArmor from "../../helpers/dummies/mixins/concerns/HasArmor";
import HasShield from "../../helpers/dummies/mixins/concerns/HasShield";
import Orc from "../../helpers/dummies/mixins/Orc";
import mix from "@aedart/mixins";

describe('Mixin builder', () => {

    it('can mix mixins into class', () => {
        let name = faker.name.findName();

        const knight = new Knight(name);

        expect(knight.name).toBe(name);
        expect(knight.armor).toBe(11);
    });

    it('respects instanceof checks', () => {
        let name = faker.name.findName();
        const knight = new Knight(name);

        expect(knight).toBeInstanceOf(Player);
        expect(knight).toBeInstanceOf(HasArmor);

        expect(knight).not.toBeInstanceOf(HasShield);
        expect(knight).not.toBeInstanceOf(Orc);
    });

    it('can extend without mixins', () => {

        class A {};
        class B extends mix(A).with() {}

        const obj = new B();

        expect(obj).toBeInstanceOf(B);
        expect(obj).toBeInstanceOf(A);
    });

    it('can inherit from multiple classes', () => {
        class A {
            greetings() {
                return 'Hi';
            }
        }
        class B {
            farewell() {
                return 'See you later';
            }
        }
        class C {
            log() {
                return 'logging...';
            }
        }
        class D {
            // This should NOT be mixed in, for this test
        }
        class E extends C {
            // This should NOT be mixed in, for this test
        }

        /**
         * @extends A
         * @extends B
         * @extends C
         */
        class Z extends mix(A, B, C).with() {
            constructor(name) {
                super();
                this.name = name;
            }

            greetings() {
                return super.greetings() + ' ' + this.name;
            }

            farewell() {
                return super.farewell() + ' ' + this.name;
            }
        }

        const obj = new Z('John');

        expect(obj.greetings()).toBe('Hi John');
        expect(obj.farewell()).toBe('See you later John');
        expect(obj.log()).toBe('logging...');

        expect(obj).toBeInstanceOf(A);
        // expect(A.prototype.isPrototypeOf(obj)).toBeTruthy(); // Is NOT going to work!

        expect(obj).toBeInstanceOf(B);
        // expect(B.prototype.isPrototypeOf(obj)).toBeTruthy(); // Is NOT going to work!

        expect(obj).toBeInstanceOf(C);
        // expect(C.prototype.isPrototypeOf(obj)).toBeTruthy(); // Is NOT going to work!

        // Not mixed into Z...
        expect(obj).not.toBeInstanceOf(D);

        // E extends C, but since E is not mixed into Z, it should NOT be instance of E.
        expect(obj).not.toBeInstanceOf(E);
    });

    it('invokes all class constructor methods', () => {

        // The inheritance mechanism is not a true multi-inheritance mechanism!
        // It's is not possible to invoke "super" from the base class and expect
        // inherited classes' constructor or methods to be invoked.
        // In other words, inherited classes are just "copied" into the base
        // class. Still, their constructors should be invoked...

        let aInvoked = false;
        let bInvoked = false;
        let cInvoked = false;
        let zInvoked = false;

        // The base class
        class A {
            constructor() {
                aInvoked = true;
                // console.log('A');
            }
        }

        // Inherits from...
        class B {
            constructor() {
                bInvoked = true;
                // console.log('B');
            }
        }
        class C {
            constructor() {
                cInvoked = true;
                // console.log('C');
            }
        }

        // Final composition
        class Z extends mix(A)
            .inherit(B, C)
            .make()
        {
            constructor() {
                super();
                zInvoked = true;
                // console.log('Z');
            }
        }

        const obj = new Z('Rick');

        expect(aInvoked).toBeTruthy();
        expect(bInvoked).toBeTruthy();
        expect(cInvoked).toBeTruthy();
        expect(zInvoked).toBeTruthy();
    });

    it('has inherited all properties', () => {
        // The base class
        class A {
            name = 'Timmy'

            // constructor() {
            //     console.log('A');
            // }
        }

        // Inherits from...
        class B {
            age = 31;

            constructor(age = 31) {
                this.age = age;
                //console.log('B');
            }
        }
        class C {
            static isHuman = true;

            // constructor() {
            //     console.log('C');
            // }
        }

        // Final composition
        class Z extends mix(A)
            .inherit(B, C)
            .make()
        {
            speed = 44;

            human() {
                // Can also be obtained via "Z.isHuman"
                return this.constructor.isHuman;
            }
        }

        let age = 43;
        const obj = new Z(age); // NOTE: argument passed on to class B constructor!

        expect(obj.hasOwnProperty('name')).toBeTruthy();
        expect(obj.name).toBe('Timmy');

        expect(obj.hasOwnProperty('age')).toBeTruthy();
        expect(obj.age).toBe(age);

        expect(obj.hasOwnProperty('speed')).toBeTruthy();
        expect(obj.speed).toBe(44);

        // Static property
        // expect(A.isHuman).toBeTruthy(); // Mixed into Z - not into A!
        expect(Z.isHuman).toBeTruthy();
        expect(obj.human()).toBeTruthy();
    });

    it('can inherit and mix', () => {
        class A {
            name = 'Thomas';
        }
        class B {
            age = 56
        }

        class Z extends mix()
            .inherit(A, B)
            .with(HasArmor)
        {

        }

        const obj = new Z();

        expect(obj).toBeInstanceOf(Z);
        expect(obj).toBeInstanceOf(A);
        expect(obj).toBeInstanceOf(B);
        expect(obj).toBeInstanceOf(HasArmor);

        expect(obj.name).toBe('Thomas');
        expect(obj.age).toBe(56);
        expect(obj.armor).toBe(11);
    });

    it('can inherit same class by multiple', function () {
        class A {
        }
        class B {
        }

        class Z extends mix()
            .inherit(A, B)
            .make() {

        }

        class N extends mix()
            .inherit(A, B)
            .make() {

        }

        const objA = new Z();
        const objB = new N();

        expect(objA).toBeInstanceOf(A);
        expect(objA).toBeInstanceOf(B);

        expect(objB).toBeInstanceOf(A);
        expect(objB).toBeInstanceOf(B);
    });
});
