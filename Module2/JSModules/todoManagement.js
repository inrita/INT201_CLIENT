const {Todo} = require('./myLibs/Todo.js')

function TodoManagement() {
    let todos = [] // stores all todo in array

    function addTodo(desc) { // ทำการ new Todo
      const todo = new Todo(desc) // เลยรัน static id ต่อ
      return todos.push(todo) // push() add เข้าไปเพื่อแล้วจะ return new length
    }

    function findTodo(searchId) { // หา element แรกที่เจอเจอปุปหยุดทำงานเลย
      const result = todos.find((todo) => searchId === todo.id)
      return result
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

function doSomething(msg) {
    return msg
}
module.exports = {TodoManagement, doSomething}