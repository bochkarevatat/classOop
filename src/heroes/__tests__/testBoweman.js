import Boweman from '../Boweman.js';
test('test show object type', () => {
  const result = new Boweman('Boweman','Boweman');
  expect(result).toEqual({
      name: 'Boweman',
      type: 'Boweman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    }) 
  });