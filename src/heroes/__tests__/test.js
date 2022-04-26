import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Undead from './Undead';
import Zombie from './Zombie';
import Daemon from './Daemon';;

describe('function for creating an object depending on the object type', () => {
    test('test show object type Bowman', () => {
        const result = new Bowman('BowmanNew')
        const expected = {
            name: 'BowmanNew',
            type: 'Bowman',
            health: 100,
            level: 1,
            attack: 25,
            defence: 25,
        };
        expect(result).toEqual(expected)
    });
    test('test show object type Daemon', () => {
        const result = new Daemon('DaemonNew')
        const expected = {
            name: 'DaemonNew',
            type: 'Daemon',
            health: 100,
            level: 1,
            attack: 10,
            defence: 40,
        };
        expect(result).toEqual(expected)
    });
    test('test show object type Undead', () => {
        const result = new Undead('UndeadNew')
        const expected = {
            name: 'UndeadNew',
            type: 'Undead',
            health: 100,
            level: 1,
            attack: 25,
            defence: 25,
        };
        expect(result).toEqual(expected)
    });
    test('test show object type Magician', () => {
        const result = new Magician('MagicianNew')
        const expected = {
            name: 'MagicianNew',
            type: 'Magician',
            health: 100,
            level: 1,
            attack: 10,
            defence: 40,
        };
        expect(result).toEqual(expected)
    });
    test('test show object type Swordsman', () => {
        const result = new Swordsman('SwordsmanNew')
        const expected = {
            name: 'SwordsmanNew',
            type: 'Swordsman',
            health: 100,
            level: 1,
            attack: 40,
            defence: 10,
        };
        expect(result).toEqual(expected)
    });
    test('test show object type Zombie', () => {
        const result = new Zombie('ZombieNew')
        const expected = {
            name: 'ZombieNew',
            type: 'Zombie',
            health: 100,
            level: 1,
            attack: 40,
            defence: 10,
        };
        expect(result).toEqual(expected)
    });
})