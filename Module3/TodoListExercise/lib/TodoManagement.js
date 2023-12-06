// ES Modules
import { Todo } from '../lib/todo.js'

// CommonJS 
// const Todo = require('./todo.js')

// Clouser ไม่ต้องมี this ในการเรียก
function todoManagement() {
    // stores all todo in array
    let todos = []

    // add a new todo to the end of todos array, returns the new length of the array
    function addTodo(id, desc, done) { // ทำการ new Todo
        todos.push(new Todo(id, desc, done))
        return todos[todos.length - 1].id
    }

    // returns a todo object that its id equals to searchId
    function findTodo(searchId) { // หา element แรกที่เจอเจอปุปหยุดทำงานเลย
        return todos.find((todo) => todo.id === searchId) // ถ้าค่าใน todo = searchId ให้ return ออกมา
    }

    // returns an index of todo that its id equals to searchId
    function findIndexTodo(searchId) { // หาตำแหน่ง index ของ array todos
        return todos.findIndex((todo) => todo.id === searchId)
    }

    // removes a todo that its id equals to removeId
    function removeTodo(removeId) { //ตามโจทย์ไม่ได้ให้ return ค่า
        todos = todos.filter((todo) => todo.id !== removeId) // จะลบไอดีก็ต้องไปค้นหาไอดีก่อน 
    }

    function clearTodo() {
        todos = []
    }

    function getNumberOfDone() {
        return todos.filter((todo) => todo.done === true).length
    }

    function getNumberOfNoneDone() {
        return todos.filter((todo) => todo.done === false).length

    }

    function setItemTodoDone(doneId) {
        const doneItem = todos.find((todo) => todo.id === Number(doneId))
        // console.log(doneItem)
        // Change to done propety to true
        if (doneItem !== undefined) doneItem.setDone(true) // .setDone() from todo.js where create Todo class
        // else console.log(doneId)
    }

    function loadTodos(userTodos) {
        // todos = [...userTodos]
        Todo.setRunningId(userTodos[userTodos.length - 1].id + 1)

        userTodos.forEach((todo) => {
            addTodo(todo.id, todo.description, todo.done)
        })
    }

    // returns todos array
    function getTodos() {
        return todos
    }

    return {
        addTodo,
        findTodo,
        findIndexTodo,
        removeTodo,
        clearTodo,
        getNumberOfDone,
        getNumberOfNoneDone,
        setItemTodoDone,
        loadTodos,
        getTodos
    }
}

// ES Modules
export {todoManagement}

// CommonJS
// module.exports = todoManagement