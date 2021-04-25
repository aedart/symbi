import Knight from "../../helpers/dummies/mixins/Knight";
import faker from 'faker';
import Player from "../../helpers/dummies/mixins/Player";
import HasArmor from "../../helpers/dummies/mixins/concerns/HasArmor";
import HasShield from "../../helpers/dummies/mixins/concerns/HasShield";
import Orc from "../../helpers/dummies/mixins/Orc";

describe('Mixin builder', () => {

    it('can mix mixins into class', () => {
        let name = faker.name.findName();

        const knight = new Knight(name);

        expect(knight.name).toBe(name);
        expect(knight.armor).toBe(11);
    });

    it('respects instanceof checks', function () {
        let name = faker.name.findName();
        const knight = new Knight(name);

        expect(knight).toBeInstanceOf(Player);
        expect(knight).toBeInstanceOf(HasArmor);

        expect(knight).not.toBeInstanceOf(HasShield);
        expect(knight).not.toBeInstanceOf(Orc);
    });


});
