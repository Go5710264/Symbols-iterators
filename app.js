const archer = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
  }
  
  const warrior = {
    name: 'Воин',
    type: 'Swordsman',
    health: 90,
    level: 1,
    attack: 25,
    defence: 50
  }
  
  const wizard = {
    name: 'Колдун',
    type: 'Magician',
    health: 30,
    level: 1,
    attack: 70,
    defence: 5
  }
  
  class Team {
    constructor(){
      this.groupMembers = {};
      this.length = Object.getOwnPropertySymbols(this.groupMembers).length;
        // name: groupMember.name,
        // type: groupMember.type,
        // health: groupMember.health,
        // level: groupMember.level,
        // attack: groupMember.attack,
        // defence: groupMember.defence
    }
  
    [Symbol.iterator]() {
      // const entries = Object.entries(this.groupMember)
    }
  
    addToGroup(newPlayer){
      let characterCharacteristics = Symbol('member');
      this.groupMembers[characterCharacteristics] = newPlayer;
    }
  
  
    showCharacter(){
      console.log(this.groupMembers)
      for(let num of this.groupMembers){
        console.log(num)
      }
    }
  }
  
  const newGroup = new Team();
  newGroup.addToGroup(archer);
  newGroup.addToGroup(warrior);
  newGroup.addToGroup(wizard);
  console.log(newGroup.showCharacter());
  