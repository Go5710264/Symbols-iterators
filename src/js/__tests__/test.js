import Character from '../Character';
import Team from '../Team';

test('return object with group members', () => {
  const firstMember = {
    name: 'Баффер',
    type: 'Sword dancer',
    health: 90,
    level: 1,
    attack: 25,
    defence: 50,
  };
  const secondMember = {
    name: 'Лекарь',
    type: 'Priest',
    health: 55,
    level: 1,
    attack: 0,
    defence: 75,
  };
  const party = [];

  const newGroup = new Team();

  newGroup.addToGroup(firstMember);
  newGroup.addToGroup(secondMember);

  for (const member of newGroup) {
    party.push(new Character(...member));
  }

  const groupClone = [
    new Character(0, firstMember),
    new Character(0, secondMember),
  ];

  expect(party).toEqual(groupClone);
});
