import { archer, warrior, wizard } from './players';
import Character from './Character';
import Team from './Team';

const newGroup = new Team();

newGroup.addToGroup(archer);
newGroup.addToGroup(warrior);
newGroup.addToGroup(wizard);

for (const member of newGroup) {
  console.log(new Character(...member));
}
