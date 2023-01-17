[![Build status](https://ci.appveyor.com/api/projects/status/fiem75sxodf9wlh9?svg=true)](https://ci.appveyor.com/project/Go5710264/symbols-iterators)

Выполнена собственная реализация итератора объектов класса 'Team':

```javascript
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
```

Результатом вызова итератора - персонаж команды (объект типа `Character`):

```javascript
  Character {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
  },
  Character {
    name: 'Воин',
    type: 'Swordsman',
    health: 90,
    level: 1,
    attack: 25,
    defence: 50
  },
  Character {
    name: 'Колдун',
    type: 'Magician',
    health: 30,
    level: 1,
    attack: 70,
    defence: 5
  }
```
