class Todo { // class จะเรียกต้องมี this
    // properties
    static nextId = 1
    constructor(id, description) {
        this.id = Todo.nextId++
        this.description = description
    }

    // methods
    // returns {id, description} object
    getTodo() {
        return this
        // return {id : this.id, description : this.description}
    }
    
    // allows to edit description
    setDescription(newDescription) {
        this.description = newDescription
    }
}

// Clouser ไม่ต้องมี this ในการเรียก
function TodoManagement() {
    let todos = [] // stores all todo in array

    function addTodo(desc) { // ทำการ new Todo
      const todo = new Todo(desc) // เลยรัน static id ต่อ
      return todos.push(todo) // push() add เข้าไปเพื่อแล้วจะ return new length
    }

    function findTodo(searchId) { // หา element แรกที่เจอเจอปุปหยุดทำงานเลย
      return result = todos.find((todo) => searchId === todo.id) // ถ้าค่าใน todo = searchId ให้ return ออกมา
    }

    function findIndexTodo(searchId) { // หาตำแหน่ง index ของ array todos
      return todos.findIndex((todo) => searchId === todo.id)
    }

    function removeTodo(removeId) { //ตามโจทย์ไม่ได้ให้ return ค่า
      todos.splice(findIndexTodo(removeId), 1) // จะลบไอดีก็ต้องไปค้นหาไอดีก่อน และก็ใช้ splice ลบ
      console.log(todos) //[Todo {id: 4, desription: 'Frontend Su Su'}] -> ตัวที่เหลือหลังจากลบไป
    }

    function getTodos() {
        return todos
    }

    return {
      addTodo,
      findTodo,
      findIndexTodo,
      removeTodo,
      getTodos
    }
}

// class Todo
const todo1 = new Todo('Laundry') //array1
const todo2 = new Todo('Exercise') //array2
console.log(todo1.getTodo())
console.log(todo2.getTodo())
todo2.setDescription('Play game')
console.log(todo2.getTodo())

// function TodoManagement()
const todoManagement = TodoManagement()
console.log(todoManagement.addTodo('Running'))
console.log(todoManagement.addTodo('Hello world, Goose'))
const {addTodo, findTodo, findIndexTodo, removeTodo, getTodos} = TodoManagement()
console.log(addTodo('Devops Su Su')) //array3
console.log(addTodo('Frontend Su Su')) //array4

console.log(findTodo(3)) // จะเห็น array3,4 เพราะ มีการสร้างตัวแปรเก็บ -> let todos = []
// console.log(findTodo(1)) // จะไม่เห็น array1,2 เพราะเป็น static method

console.log(findIndexTodo(1)) //-1 หาไม่เจอ
console.log(findIndexTodo(3)) //0 หาเจออยู่ index ที่ 0
console.log(findIndexTodo(4)) //1 หาเจออยู่ index ที่ 1

removeTodo(3) // ไม่มี return ใช้ console.log ไม่ได้

console.log(getTodos()) // return ค่า array ใน todos


// // JS Modules
// const { Todo } = require('./myLibs/todoList.js')
// // const { TodoManagement, doSome}
