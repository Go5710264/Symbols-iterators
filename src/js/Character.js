export default class Character {
  constructor(_, charInfo) {
    this.name = charInfo.name;
    this.type = charInfo.type;
    this.health = charInfo.health;
    this.level = charInfo.level;
    this.attack = charInfo.attack;
    this.defence = charInfo.defence;
  }
}
