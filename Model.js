
// class Task {
//     constructor(id, name) {
//         this.id = id;
//         this.name = name;
//     }
// }

// let lastId = 0; // משתנה חיצוני שיתעד את ה-ID האחרון
// export const arrTask = [
//     new Task(++lastId, "to learn..."),
//     new Task(++lastId, "to sleep...")
// ];

// export const getNextId = () => {
//     return ++lastId; // פונקציה להחזרת ה-ID הבא
// };

// export default Task; // ייצוא של ה-class Task
let id = 0
export const arrTask = []

export const getNextId = () => {
  id = id + 1
  return id
}

export default class Task {
  constructor(id, name) {
    this.id = id
    this.name = name
  }
}
