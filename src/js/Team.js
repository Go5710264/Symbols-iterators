export default class Team {
  constructor() {
    this.groupMembers = {};
    this.index = 1;
  }

  [Symbol.iterator]() {
    const entries = Object.entries(this.groupMembers);
    let indx = -1;
    return {
      next() {
        indx += 1;
        return {
          value: entries[indx],
          done: indx >= entries.length,
        };
      },
    };
  }

  addToGroup(newPlayer) {
    this.groupMembers[this.index] = newPlayer;
    this.index += 1;
  }
}
