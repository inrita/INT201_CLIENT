// ES Modules
import { todoManagement } from "../lib/TodoManagement.js"
import { todoUserInterface } from "../UI/todoList.js"

const {
  addTodo,
  removeTodo,
  findTodo,
  getTodos,
  getNumberOfDone,
  getNumberOfNoneDone,
  setItemTodoDone,
  loadTodos,
  clearTodo
} = todoManagement()

const { showTodoItem, showNumberOfDone, showNumberOfNoneDone, removeTodoItem } =
  todoUserInterface()

// CommonJS
// const todoManagement = require('../lib/todoManagement.js')
// const todoUserInterface = require('../UI/todoList.js')

// const { showTodoItem, showNumberOfDone, showNumberOfNoneDone, removeTodoItem } =
//   todoUserInterface()
// const {
//   addTodo,
//   removeTodo,
//   findTodo,
//   getTodos,
//   getNumberOfDone,
//   getNumberOfNotDone,
//   setItemTodoDone,
//   loadTodos,
//   clearTodo
// } = todoManagement()

// ปุ่ม add
const addTodoHandler = () => {
    const todoItem = document.querySelector('input').value
    if (todoItem.trim().length !== 0) {
        const todoId = addTodo(undefined, todoItem, undefined)
        showTodoItem(todoId, todoItem)
        addButtonHandler(todoId)
        showNumberOfDone(getNumberOfDone())
        showNumberOfNoneDone(getNumberOfNoneDone())
    }
}

const addButtonHandler = (todoId) => {
    document
        .getElementById(todoId)
        .children[1].addEventListener('click', notDoneButtonHandler)
    document
        .getElementById(todoId)
        .children[2].addEventListener('click', removeButtonHandler)
    document.querySelector('input').value = '' //เมื่อพิมพ์เสร็จให้ input ว่างเหมือนเดิม
}

// ปุ่ม Not done
const notDoneButtonHandler = (event) => {
    const doneButtonFire = event.target
    setdoneStyle(doneButtonFire)
    setItemTodoDone(doneButtonFire.parentElement.getAttribute('id'))
    showNumberOfDone(getNumberOfDone())
    showNumberOfNoneDone(getNumberOfNoneDone())
}

// ออกแบบปุ่ม done 
const setdoneStyle = (doneButtonFire) => {
    doneButtonFire.textContent = 'Done'
    doneButtonFire.style = 'background-color: green; color: white'
}

// ปุ่ม remove
const removeButtonHandler = (event) => {
    const removeButtonFire = event.target
    const removeId = removeButtonFire.parentElement.getAttribute('id')
    removeTodoItem(removeId)
    removeTodo(Number(removeId))
    showNumberOfDone(getNumberOfDone())
    showNumberOfNoneDone(getNumberOfNoneDone())
}

const beforeUnloadHandler = (event) => {
    event.preventDefault()
    localStorage.setItem('todos', JSON.stringify(getTodos())) // แปลง JS object เป็น string
    clearTodo()
}

const loadHandler = () => {
    const localTodos = localStorage.getItem('todos')
    const yourTodos = JSON.parse(localTodos) // แปลง string กลับเป็น JS object

    if (
        yourTodos !== null &&
        yourTodos !== undefined &&
        yourTodos?.length !== 0
    ) {
    //[{"id":1,"description":"Shopping","done":true},{"id":2,"description":"Watch Movie","done":false},{"id":3,"description":"sleep","done":true}]

    loadTodos(yourTodos)
    getTodos().forEach((todo) => {
        showTodoItem(todo.id, todo.description)
        addButtonHandler(todo.id)
        
        if (todo.done) {
            const doneButtonFire = document.getElementById(todo.id).children[1]
            setdoneStyle(doneButtonFire)
        }
    })

    showNumberOfDone(getNumberOfDone())
    showNumberOfNoneDone(getNumberOfNoneDone())
    }

    const addButton = document.getElementById('addBtn')
    addButton.addEventListener('click', () => addTodoHandler())

    const inputTodo = document.querySelector('input')
    inputTodo.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') addTodoHandler()
    })
}

// ES Modules
export {
    addTodoHandler,
    notDoneButtonHandler,
    removeButtonHandler,
    beforeUnloadHandler,
    loadHandler
}

// CommonJS
// module.exports = {
//     addTodoHandler,
//     notDoneButtonHandler,
//     removeButtonHandler,
//     beforeUnloadHandler,
//     loadHandler
// }


