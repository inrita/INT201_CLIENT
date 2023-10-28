// export 1 หน่วย
const Todo  = require('./myLibs/Todo.js')
// const {Todo} = require('./myLibs/Todo.js') // ใช้แบบ object

const tm = require('./todoManagement.js') // เปลี่ยนชื่อได้ เพราะ ไม่ได้ใช้การ destructuring ชื่อไม่ตรงกันได้

//// export 2 หน่วย
const {TodoManagement, doSomething} = require('./todoManagement.js') //ต้องใช้ชื่อให้ตรงกัน

// ลองใช้งานเลยหลังจาก exports ที่ Todo.js
const td1 = new Todo('jokking')
console.log(td1) // Todo { id: 1, description: undefined } -> import ถูก

const {addTodo} = tm() // ต้องเรียก function ก่อน
console.log(addTodo('shopping'))

console.log(doSomething('js'))